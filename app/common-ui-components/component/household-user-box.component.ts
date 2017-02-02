/**
 * Created by john on 8/01/2017.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";
import {HouseholdUser} from "../../model/household-user";

@Component({
    selector: 'household-user-box',
    templateUrl: 'app/common-ui-components/template/household-user-box.template.html'
})
export class HouseholdUserBoxComponent {
    @Input() householdUser: HouseholdUser;
    @Output() onClickEmitter = new EventEmitter<HouseholdUser>();
    @Input() canDelete = false;

    onClick() {
        this.onClickEmitter.emit(this.householdUser);
    }
}
