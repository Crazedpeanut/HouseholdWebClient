import { Component } from '@angular/core';
import {JournalEntry} from "../model/journal-entry";

@Component({
  selector: 'journal-entry-form',
  templateUrl: 'app/template/journal-entry-form.template.html'
})
export class JournalEntryFormComponent{
  journalEntry: JournalEntry = new JournalEntry();

  onSubmit(): void {
    console.log("Submit!");
  }

  resetForm(): void {
      this.journalEntry = new JournalEntry();
  }

  openImageUploadModal(): void {
    console.log("Opening modal");
  }
}
