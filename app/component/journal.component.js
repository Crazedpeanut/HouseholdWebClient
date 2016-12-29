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
var core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
var journal_service_1 = require("../service/journal.service");
var router_1 = require("@angular/router");
var JournalComponent = (function () {
    function JournalComponent(journalService, route) {
        this.journalService = journalService;
        this.route = route;
    }
    JournalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.journalService.getJournalById(+params["id"]); })
            .subscribe(function (jrnl) { return _this.journal = jrnl; });
    };
    JournalComponent.prototype.onJournalEntrySubmitted = function (journalEntry) {
        this.journal.journalEntries.push(journalEntry);
    };
    return JournalComponent;
}());
JournalComponent = __decorate([
    core_1.Component({
        selector: 'journal',
        templateUrl: 'app/template/journal.template.html',
        providers: [journal_service_1.JournalService]
    }),
    __metadata("design:paramtypes", [journal_service_1.JournalService, router_1.ActivatedRoute])
], JournalComponent);
exports.JournalComponent = JournalComponent;
//# sourceMappingURL=journal.component.js.map