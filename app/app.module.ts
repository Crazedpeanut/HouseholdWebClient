import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './component/app.component';
import { JournalComponent } from './component/journal.component';
import { NavComponent } from './component/nav.component';
import { JournalEntryFormComponent } from './component/journal-entry-form.component'
import { JournalEntryListComponent } from './component/journal-entry-list.component';
import { DashboardComponent } from './component/dashboard.component';
import {FormsModule} from "@angular/forms";
import { HouseholdModalComponent } from "./component/household-modal.component";
import { ImageSelectionContent } from './component/image-selection.component';

@NgModule({
  imports:      [
      FormsModule,
      BrowserModule,
      AppRoutingModule,
      NgbModule.forRoot()
  ],
  declarations: [
      AppComponent,
      JournalComponent,
      NavComponent,
      JournalEntryFormComponent,
      JournalEntryListComponent,
      DashboardComponent,
      HouseholdModalComponent,
      ImageSelectionContent
  ],
  entryComponents: [
      ImageSelectionContent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
