/**
 * Created by john on 8/01/2017.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";
import {HouseholdUser} from "../model/household-user";

@Component({
    selector: 'household-tagged-user',
    templateUrl: 'app/template/household-tagged-user.template.html'
})
export class HouseholdTaggedUserComponent {
    @Input() householdUser: HouseholdUser;
    @Output() onTaggedUserDelete = new EventEmitter<HouseholdUser>();
    @Input() canDelete = false;

    onClick() {
        console.log("On Delete Tagged User");
        this.onTaggedUserDelete.emit(this.householdUser);
    }
}
