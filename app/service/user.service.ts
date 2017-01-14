import {Injectable} from "@angular/core";
import {HouseholdUser} from "../model/household-user";

/**
 * Created by john on 14/01/2017.
 */
@Injectable()
export class UserService {
    private loggedInUser: HouseholdUser = new HouseholdUser(0, 'John', 'Kendall');

    getLoggedInUser() {
        return this.loggedInUser;
    }
}
