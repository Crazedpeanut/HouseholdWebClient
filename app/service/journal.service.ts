import { Injectable } from '@angular/core';

import { Journal } from '../model/journal';
import { MockJournal } from './MOCK_SERVICES';
import {JournalEntry} from "../model/journal-entry";
import {JournalImage} from "../model/journal-image";

@Injectable()
export class JournalService {
  getJournalById(id: number): Promise<Journal> {
      console.log(`Getting journal with id: ${id}`);
      return Promise.resolve(MockJournal);
  }

  createJournalEntry(journalEntry: JournalEntry){
      journalEntry.createdDateTime = '2003-06-20T23:23:00.003Z';
      MockJournal.journalEntries.push(journalEntry);
      return Promise.resolve(journalEntry);
  }

  createJournalImage(imageFile: File){
      return Promise.resolve(new JournalImage(0, 'http://thumb1.shutterstock.com/display_pic_with_logo/2117717/285854987/stock-photo-food-table-healthy-delicious-organic-meal-concept-285854987.jpg', 'http://thumb1.shutterstock.com/display_pic_with_logo/2117717/285854987/stock-photo-food-table-healthy-delicious-organic-meal-concept-285854987.jpg'));
  }
}
