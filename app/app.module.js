"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./routing/app-routing.module");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./component/app.component");
var journal_component_1 = require("./component/journal.component");
var nav_component_1 = require("./component/nav.component");
var journal_entry_list_component_1 = require("./component/journal-entry-list.component");
var dashboard_component_1 = require("./component/dashboard.component");
var household_modal_component_1 = require("./component/household-modal.component");
var image_selection_component_1 = require("./journal-entry-form/component/image-selection.component");
var title_case_pipe_1 = require("./pipes/title-case.pipe");
var messages_component_1 = require("./component/messages.component");
var household_user_summary_1 = require("./component/household-user-summary");
var journal_entry_form_module_1 = require("./journal-entry-form/journal-entry-form.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule.forRoot(),
            ng_bootstrap_1.NgbModule.forRoot(),
            journal_entry_form_module_1.JournalEntryFormModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            journal_component_1.JournalComponent,
            nav_component_1.NavComponent,
            journal_entry_list_component_1.JournalEntryListComponent,
            dashboard_component_1.DashboardComponent,
            household_modal_component_1.HouseholdModalComponent,
            title_case_pipe_1.TitleCasePipe,
            messages_component_1.MessagesComponent,
            household_user_summary_1.HouseholdUserSummary
        ],
        entryComponents: [
            image_selection_component_1.ImageSelectionContentComponent
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map