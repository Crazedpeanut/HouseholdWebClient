import { HouseholdUser } from "./household-user";
/**
 * Created by john on 2/01/2017.
 */
export class Household {
    constructor(
        public id: number,
        public name: String,
        public members: HouseholdUser[]
    ) {}
}
