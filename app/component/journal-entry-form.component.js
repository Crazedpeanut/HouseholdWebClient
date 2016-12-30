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
var journal_entry_form_1 = require("../model/journal-entry-form");
var journal_service_1 = require("../service/journal.service");
var journal_entry_form_to_journal_entry_1 = require("../mappers/journal-entry-form-to-journal-entry");
var entry_form_image_1 = require("../model/entry-form-image");
var JournalEntryFormComponent = (function () {
    function JournalEntryFormComponent(journalService) {
        this.journalService = journalService;
        this.onJournalEntrySubmitted = new core_1.EventEmitter();
        this.model = new journal_entry_form_1.JournalEntryForm();
        this.imageRegexPattern = /image-*/;
    }
    JournalEntryFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Submit!");
        var mapper = new journal_entry_form_to_journal_entry_1.JournalEntryFormToJournalEntry();
        var journalEntry = mapper.map(this.model);
        var imagePromises;
        for (var i = 0; i < this.model.entryFormImages.length; i++) {
            var promise = this.journalService.createJournalImage(this.model.entryFormImages[i].file);
            promise.then(function (journalImage) { return console.log("Image uploaded: " + journalImage.imageUrl); });
            imagePromises.push(promise);
        }
        Promise.all(imagePromises)
            .then(function (journalImages) {
            console.log("All Images done!");
            journalEntry.images = journalImages;
            _this.journalService.createJournalEntry(journalEntry)
                .then(function (entry) {
                _this.onJournalEntrySubmitted.emit(entry);
            });
        });
    };
    JournalEntryFormComponent.prototype.resetForm = function () {
        this.model = new journal_entry_form_1.JournalEntryForm();
    };
    JournalEntryFormComponent.prototype.onImageSelectChange = function (event) {
        var _this = this;
        var files = null;
        if (event.target) {
            files = event.target.files;
            var _loop_1 = function (i) {
                if (!files[i].type.match(this_1.imageRegexPattern)) {
                    console.log("Not an image!");
                    return { value: void 0 };
                }
                this_1.createThumbnail(files[i])
                    .then(function (thumbnailUrl) {
                    var entryFormImage = new entry_form_image_1.EntryFormImage(files[i], thumbnailUrl.toString());
                    _this.model.entryFormImages.push(entryFormImage);
                });
            };
            var this_1 = this;
            for (var i = 0; i < files.length; i++) {
                var state_1 = _loop_1(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
    };
    JournalEntryFormComponent.prototype.createThumbnail = function (file) {
        var fileReader = new FileReader();
        return new Promise(function (resolve, reject) {
            fileReader.onload = function (e) {
                resolve(e.target.result);
            };
            fileReader.readAsDataURL(file);
        });
    };
    return JournalEntryFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], JournalEntryFormComponent.prototype, "onJournalEntrySubmitted", void 0);
JournalEntryFormComponent = __decorate([
    core_1.Component({
        selector: 'journal-entry-form',
        templateUrl: 'app/template/journal-entry-form.template.html',
        providers: [journal_service_1.JournalService]
    }),
    __metadata("design:paramtypes", [journal_service_1.JournalService])
], JournalEntryFormComponent);
exports.JournalEntryFormComponent = JournalEntryFormComponent;
//# sourceMappingURL=journal-entry-form.component.js.map