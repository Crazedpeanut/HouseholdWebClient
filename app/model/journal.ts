import { JournalEntry } from './journal-entry';

export class Journal {
    id: number;
    journalEntries: JournalEntry[];

    constructor(id: number, journalEntries: JournalEntry[]) {
        this.id = id;
        this.journalEntries = journalEntries;
    }
}