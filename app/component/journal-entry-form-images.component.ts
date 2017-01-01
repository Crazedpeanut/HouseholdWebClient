/**
 * Created by john on 30/12/2016.
 */

import {Component, Input} from "@angular/core";
import {EntryFormImage} from "../model/entry-form-image";

@Component({
    selector: 'journal-entry-form-images',
    templateUrl: 'app/template/journal-entry-form-images.template.html'
})
export class JournalEntryFormImagesComponent{
    @Input() entryFormImages: EntryFormImage[];

    deleteClickedImage (entry: EntryFormImage) {

        console.log(entry);

        let index = this.entryFormImages.findIndex(function (element: EntryFormImage) {
            return element.thumbnailUrl === entry.thumbnailUrl;
        });

        this.entryFormImages.splice(index, 1);
    }
}