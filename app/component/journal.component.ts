import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { HouseholdService } from '../service/journal.service';
import {Journal} from "../model/journal";
import {ActivatedRoute, Params} from "@angular/router";
import {JournalEntry} from "../model/journal-entry";

@Component({
  selector: 'journal',
  templateUrl: 'app/template/journal.template.html',
  providers: [ HouseholdService ]
})
export class JournalComponent implements OnInit{

  journal: Journal;

  constructor(private journalService: HouseholdService, private route: ActivatedRoute) {
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
