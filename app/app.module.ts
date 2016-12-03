import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './component/app.component';
import { JournalComponent } from './component/journal.component';
import { NavComponent } from './component/nav.component';
import { JournalEntryFormComponent } from './component/journal-entry-form.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, JournalComponent, NavComponent, JournalEntryFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
