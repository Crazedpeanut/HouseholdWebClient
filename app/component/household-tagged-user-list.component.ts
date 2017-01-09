/**
 * Created by john on 5/01/2017.
 */
import {Component, Input} from "@angular/core";
import {HouseholdUser} from "../model/household-user";

@Component({
    selector: 'household-tagged-user-list',
    templateUrl: 'app/template/household-tagged-user-list.template.html'
})
export class HouseholdTaggerUserListComponent {
    @Input() taggedUsers: HouseholdUser[];
}