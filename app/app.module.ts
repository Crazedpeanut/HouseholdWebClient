import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './component/app.component';
import { JournalComponent } from './component/journal.component';
import { NavComponent } from './component/nav.component';
import { JournalEntryFormComponent } from './component/journal-entry-form.component'
import { JournalEntryListComponent } from './component/journal-entry-list.component';
import { DashboardComponent } from './component/dashboard.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [
      FormsModule,
      BrowserModule,
      AppRoutingModule
  ],
  declarations: [ AppComponent, JournalComponent, NavComponent, JournalEntryFormComponent, JournalEntryListComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
