/**
 * Created by john on 14/01/2017.
 */
import {Component, OnInit} from "@angular/core";
import {PAGE_TITLE_PREFIX} from "../constants";
import {Title} from "@angular/platform-browser";
import {SessionService} from "../service/session.service";
import {HouseholdUser} from "../model/household-user";
import {Household} from "../model/household";

@Component({
    selector: 'household-user-summary',
    template: `
        <div class="dropdown-header">{{ currentHousehold.name }}</div>
        <div class="dropdown-item"><a>Members</a></div>
        <div class="dropdown-divider"></div>
        <div class="dropdown-header">{{ currentUser.firstname }} {{ currentUser.lastname }}</div>
        <div class="dropdown-item"><a>Sign out</a></div>
`
})
export class HouseholdUserSummary implements OnInit {
    public currentUser: HouseholdUser;
    public currentHousehold: Household;

    constructor(private sessionService: SessionService) {}


    ngOnInit(): void {
        this.currentUser = this.sessionService.getLoggedInUser();
        this.currentHousehold = this.sessionService.getCurrentHousehold();
    }
}
