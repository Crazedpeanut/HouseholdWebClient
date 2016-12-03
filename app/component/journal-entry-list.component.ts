import {Component, Input} from '@angular/core';
import { JournalEntry } from '../model/journal-entry';

@Component({
  selector: 'journal-entry-list',
  templateUrl: 'app/template/journal-entry-list.template.html',
  providers: [ ]
})
export class JournalEntryListComponent {

  @Input()
  journalEntries: JournalEntry[];
}
