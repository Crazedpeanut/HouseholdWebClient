import { Injectable } from '@angular/core';

import { Journal } from '../model/journal';
import { MockJournal } from './MOCK_SERVICES';

@Injectable()
export class JournalService {
  getJournalById(id: number): Promise<Journal> {
      console.log(`Getting journal with id: ${id}`)
    return Promise.resolve(MockJournal);
  }
}
