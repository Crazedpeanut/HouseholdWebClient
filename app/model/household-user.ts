/**
 * Created by john on 1/01/2017.
 */
export class HouseholdUser {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string
    ){}
}

HouseholdUser.prototype.toString = function() {
    return `${this.firstname} ${this.lastname}`;
};