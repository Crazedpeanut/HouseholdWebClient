"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./component/app.component');
var journal_component_1 = require('./component/journal.component');
var nav_component_1 = require('./component/nav.component');
var journal_entry_form_component_1 = require('./component/journal-entry-form.component');
var journal_entry_list_component_1 = require('./component/journal-entry-list.component');
var dashboard_component_1 = require('./component/dashboard.component');
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [app_component_1.AppComponent, journal_component_1.JournalComponent, nav_component_1.NavComponent, journal_entry_form_component_1.JournalEntryFormComponent, journal_entry_list_component_1.JournalEntryListComponent, dashboard_component_1.DashboardComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map