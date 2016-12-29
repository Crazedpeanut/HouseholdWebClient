import {Component} from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'household-modal',
    templateUrl: 'app/template/household-modal.template.html'
})
export class HouseholdModalComponent {
    constructor(private modalService: NgbModal) {}

    open(content: Component, options: NgbModalOptions) {
        const modalRef = this.modalService.open(content, options);
    }
}