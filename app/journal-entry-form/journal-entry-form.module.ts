import {CommonModule} from "@angular/common";
import {NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {JournalEntryFormComponent} from "./component/journal-entry-form.component";
import {JournalEntryFormImageComponent} from "./component/journal-entry-form-image.component";
import {JournalEntryFormImagesComponent} from "./component/journal-entry-form-images.component";
import {ImageSelectionContentComponent} from "./component/image-selection.component";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HouseholdUserTypeAheadComponent} from "./component/household-user-typeahead.component";
import {CommonUiComponentsModule} from "../common-ui-components/common-ui-components.module";

@NgModule({
    imports:      [
        CommonModule,
        FormsModule,
        CommonUiComponentsModule.forRoot(),
        NgbModule.forRoot()
    ],
    declarations: [
        JournalEntryFormComponent,
        JournalEntryFormImageComponent,
        JournalEntryFormImagesComponent,
        ImageSelectionContentComponent,
        HouseholdUserTypeAheadComponent
    ],
    exports: [
        JournalEntryFormImagesComponent,
        JournalEntryFormImageComponent,
        JournalEntryFormComponent,
        ImageSelectionContentComponent,
        HouseholdUserTypeAheadComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JournalEntryFormModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: JournalEntryFormModule,
        }
    }
}
