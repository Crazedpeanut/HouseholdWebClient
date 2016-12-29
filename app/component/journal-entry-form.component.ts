import {Component, Output, EventEmitter} from '@angular/core';
import {JournalEntryForm} from "../model/journal-entry-form";
import {JournalService} from "../service/journal.service";
import {JournalEntryFormToJournalEntry} from "../mappers/journal-entry-form-to-journal-entry";
import {JournalEntry} from "../model/journal-entry";

@Component({
  selector: 'journal-entry-form',
  templateUrl: 'app/template/journal-entry-form.template.html',
  providers: [ JournalService ]
})
export class JournalEntryFormComponent{

  @Output() onJournalEntrySubmitted = new EventEmitter<JournalEntry>();
  model: JournalEntryForm = new JournalEntryForm();
  imageRegexPattern = /image-*/;

  constructor(private journalService: JournalService){

  }

  onSubmit(): void {
    console.log("Submit!");
    let mapper = new JournalEntryFormToJournalEntry();
    let journalEntry = mapper.map(this.model);
    let imagePromises = [];

    for (let i = 0; i < this.model.images.length; i++) {
      let promise = this.journalService.createJournalImage(this.model.images[i]);
      promise.then(journalImage => console.log("Image uploaded: " + journalImage.imageUrl));
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

  onImageSelectChange(event : Event): void {
    let files = null;
    if(event.target){

      files = event.target.files;

      for(var i = 0; i < files.length; i++ ) {
        if(files[i].type.match(this.imageRegexPattern)){
          this.model.images.push(files[i]);
        }
        else{
          console.log("Not an image!");
        }
      }
    }

  }
}
