import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { JournalService } from '../service/journal.service';
import {Journal} from "../model/journal";
import {ActivatedRoute, Params} from "@angular/router";
import {JournalEntry} from "../model/journal-entry";
import {Title} from "@angular/platform-browser";
import {PAGE_TITLE_PREFIX} from "../constants";

@Component({
  selector: 'journal',
  templateUrl: 'app/template/journal.template.html',
  providers: [ JournalService ]
})
export class JournalComponent implements OnInit{

  journal: Journal;
  PAGE_TITLE: String = "Journal";

  constructor(private journalService: JournalService, private route: ActivatedRoute, titleService: Title) {
    titleService.setTitle(`${PAGE_TITLE_PREFIX} ${this.PAGE_TITLE}`)
  }

  ngOnInit(): void {

      this.route.params
          .switchMap((params: Params) => this.journalService.getJournalById(+params["id"]))
          .subscribe(jrnl => this.journal = jrnl);
  }

  onJournalEntrySubmitted(journalEntry: JournalEntry): void {
    this.journal.journalEntries.push(journalEntry);
  }
}
