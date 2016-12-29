import {Component, Output, EventEmitter} from '@angular/core';
import {JournalImage} from "../model/journal-image";

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'image-select-modal',
    templateUrl: 'app/template/image-selection.template.html'
})
export class ImageSelectionContent {

    @Output() onImagesSelected = new EventEmitter<JournalImage[]>();
    selectedImages: JournalImage [];

    constructor(private activeModal: NgbActiveModal) {}

    selectImage(journalImage: JournalImage){
        this.selectedImages.push(journalImage);
    }

    deselectImage(journalImage: JournalImage ) {

    }

    imageSelectionComplete() {
        this.onImagesSelected.emit(this.selectedImages);
    }

}