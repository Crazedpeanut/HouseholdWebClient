/**
 * Created by john on 14/01/2017.
 */

import {HouseholdUser} from "../model/household-user";
import {Household} from "../model/household";
import {Injectable} from "@angular/core";

@Injectable()
export class SessionService {
    private loggedInUser: HouseholdUser = new HouseholdUser(0, 'John', 'Kendall');
    private currentHousehold: Household = new Household(0,
        "Amazing Household",
        [
            new HouseholdUser(0, 'Bob', 'Johns'),
            new HouseholdUser(1, 'Frank', 'Johns'),
            new HouseholdUser(2, 'Joseph', 'Johns'),
            new HouseholdUser(3, 'Lisa', 'Johns')
        ]
    );

    getLoggedInUser() : HouseholdUser {
        return this.loggedInUser;
    }

    getCurrentHousehold() : Household {
        return this.currentHousehold;
    }
}