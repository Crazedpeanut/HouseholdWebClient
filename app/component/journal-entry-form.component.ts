import {Component, Output, EventEmitter, ViewChild, OnInit} from '@angular/core';
import {JournalEntryForm} from "../model/journal-entry-form";
import {JournalService} from "../service/journal.service";
import {JournalEntryFormToJournalEntry} from "../mappers/journal-entry-form-to-journal-entry";
import {JournalEntry} from "../model/journal-entry";
import {JournalImage} from "../model/journal-image";
import {EntryFormImage} from "../model/entry-form-image";
import {ThumbnailService} from "../service/thumbnail.service";
import {HouseholdUser} from "../model/household-user";
import {UserService} from "../service/user.service";
import {SessionService} from "../service/session.service";

@Component({
  selector: 'journal-entry-form',
  templateUrl: 'app/template/journal-entry-form.template.html',
  providers: [ JournalService, ThumbnailService, SessionService ]
})
export class JournalEntryFormComponent implements OnInit {

  @Output() onJournalEntrySubmitted = new EventEmitter<JournalEntry>();
  public fileInputContent : any;
  model: JournalEntryForm = new JournalEntryForm();
  imageRegexPattern = /image-*/;
  public canDeleteTaggedUsers = true;
  public unTaggedHouseholdUsers: HouseholdUser[] = [];

  constructor(private journalService: JournalService,
              private sessionService: SessionService,
              private thumbnailService: ThumbnailService){}

  ngOnInit(): void {
    this.unTaggedHouseholdUsers = this.sessionService.getCurrentHousehold().members;
  }

  onUserSelected(user: any): void {
    console.log(user);
    this.model.taggedUsers.push(user);
    let userIndex = this.unTaggedHouseholdUsers.indexOf(user);
    this.unTaggedHouseholdUsers.splice(userIndex, 1);
  }

  onDeleteSelectedImage(image: EntryFormImage) {
    let index = this.model.entryFormImages.findIndex(function (element: EntryFormImage) {
      return element.thumbnailUrl === image.thumbnailUrl;
    });

    this.model.entryFormImages.splice(index, 1);

    this.resetFileInput();
  }

  onSubmit(): void {
    let mapper = new JournalEntryFormToJournalEntry();
    let journalEntry: JournalEntry;
    let imagePromises = new Array<Promise<JournalImage>>();

    this.model.author = this.sessionService.getLoggedInUser();
    journalEntry = mapper.map(this.model);

    for (let i = 0; i < this.model.entryFormImages.length; i++) {
      let entryFormImage = this.model.entryFormImages[i];
      let promise = this.journalService.createJournalImage(entryFormImage.file);

      promise.then(journalImage => {
        console.log("Image uploaded: " + journalImage.imageUrl);
        journalImage.thumbnailUrl = entryFormImage.thumbnailUrl;
      });

      imagePromises.push(promise);
    }

    Promise.all(imagePromises)
        .then(journalImages => {
          console.log("All Images done!");

          journalEntry.images = journalImages;

          this.journalService.createJournalEntry(journalEntry)
              .then(entry => {
                this.onJournalEntrySubmitted.emit(entry);
              });
        });
  }

  resetForm(): void {
      this.model = new JournalEntryForm();
  }

  onImageSelectChange(event: any): void {
    let files: File[]  = null;

    this.resetFileInput();

    if(event.target) {

      files = event.target.files;

      for(let i = 0; i < files.length; i++ ) {
        if(!files[i].type.match(this.imageRegexPattern)) {
          console.log("Not an image!");
          return;
        }

        this.thumbnailService.createThumbnail(files[i])
            .then(thumbnailUrl => {
              let entryFormImage = new EntryFormImage(files[i], thumbnailUrl.toString());
              this.model.entryFormImages.push(entryFormImage);
            });
      }
    }
  }

  resetFileInput() {
    this.fileInputContent = [];
  }
}
