/**
 * Created by john on 30/12/2016.
 */

import {Component, Input, EventEmitter, Output} from "@angular/core";
import {EntryFormImage} from "../model/entry-form-image";

@Component({
    selector: 'journal-entry-form-images',
    templateUrl: 'app/journal-entry-form/template/journal-entry-form-images.template.html'
})
export class JournalEntryFormImagesComponent{
    @Input() entryFormImages: EntryFormImage[];
    @Output() onDelete = new EventEmitter<EntryFormImage>();

    deleteClickedImage (entry: EntryFormImage) {
        this.onDelete.emit(entry);
    }
}