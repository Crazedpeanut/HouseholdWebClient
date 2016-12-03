import { Component, Input } from '@angular/core';

import { JournalService } from '../service/journal.service';
import { JournalEntry } from '../model/journal-entry';

@Component({
  selector: 'journal',
  templateUrl: 'app/template/journal.template.html',
  providers: [ JournalService ]
})
export class JournalComponent {

  journalEntries: JournalEntry[];

  constructor(private journalService: JournalService) {
    this.journalEntries = journalService.getJournal();
  }
}
