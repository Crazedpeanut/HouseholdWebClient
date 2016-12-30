/**
 * Created by john on 30/12/2016.
 */

import {Component, Input} from "@angular/core";
import {EntryFormImage} from "../model/entry-form-image";

@Component({
    selector: 'journal-entry-form-image',
    templateUrl: 'app/template/journal-entry-form-image.template.html'
})
export class JournalEntryFormImageComponent{
    @Input() entryFormImage: EntryFormImage;
    deleteOverlayVisible: boolean = false;

    onMouseEnter() {
        this.deleteOverlayVisible = true;
    }

    onMouseLeave() {
        this.deleteOverlayVisible = false;
    }


}