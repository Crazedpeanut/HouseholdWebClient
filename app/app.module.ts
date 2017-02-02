import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './component/app.component';
import { JournalComponent } from './component/journal.component';
import { NavComponent } from './component/nav.component';
import { JournalEntryListComponent } from './component/journal-entry-list.component';
import { DashboardComponent } from './component/dashboard.component';
import { HouseholdModalComponent } from "./component/household-modal.component";
import { ImageSelectionContentComponent } from './journal-entry-form/component/image-selection.component';
import {TitleCasePipe} from "./pipes/title-case.pipe";
import {MessagesComponent} from "./component/messages.component";
import {HouseholdUserSummary} from "./component/household-user-summary";
import {JournalEntryFormModule} from "./journal-entry-form/journal-entry-form.module";

@NgModule({
  imports:      [
      BrowserModule,
      AppRoutingModule.forRoot(),
      NgbModule.forRoot(),
      JournalEntryFormModule.forRoot()
  ],
  declarations: [
      AppComponent,
      JournalComponent,
      NavComponent,
      JournalEntryListComponent,
      DashboardComponent,
      HouseholdModalComponent,
      TitleCasePipe,
      MessagesComponent,
      HouseholdUserSummary
  ],
  entryComponents: [
      ImageSelectionContentComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
