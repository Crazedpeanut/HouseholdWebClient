import { Injectable } from '@angular/core';

import { JournalEntry } from '../model/journal-entry';
import { ENTRIES } from './MOCK_SERVICES';

@Injectable()
export class JournalService {
  getJournal(): JournalEntry[] {
    return ENTRIES;
  }
}
