import {JournalEntryForm} from "../model/journal-entry-form";
import {JournalEntry} from "../model/journal-entry";

export class JournalEntryFormToJournalEntry {
    map(journalEntryForm: JournalEntryForm) {
        let entry = new JournalEntry();

        entry.content = journalEntryForm.content;
        entry.title = journalEntryForm.title;
        return entry;
    }
}