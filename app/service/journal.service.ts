import { Injectable } from '@angular/core';

import { Journal } from '../model/journal';
import {JournalEntry} from "../model/journal-entry";
import {JournalImage} from "../model/journal-image";
import {HouseholdUser} from "../model/household-user";

@Injectable()
export class JournalService {

    getJournalById(id: number): Promise<Journal> {
      console.log(`Getting journal with id: ${id}`);
      return Promise.resolve(new Journal(0, []));
    }

    createJournalEntry(journalEntry: JournalEntry): Promise<JournalEntry>{
      journalEntry.createdDateTime = '2003-06-20T23:23:00.003Z';
      return Promise.resolve(journalEntry);
    }

    createJournalImage(imageFile: File): Promise<JournalImage>{
      return Promise.resolve(new JournalImage(0, 'http://thumb1.shutterstock.com/display_pic_with_logo/2117717/285854987/stock-photo-food-table-healthy-delicious-organic-meal-concept-285854987.jpg', 'http://thumb1.shutterstock.com/display_pic_with_logo/2117717/285854987/stock-photo-food-table-healthy-delicious-organic-meal-concept-285854987.jpg'));
    }
}
