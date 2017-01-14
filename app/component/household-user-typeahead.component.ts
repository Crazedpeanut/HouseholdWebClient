/**
 * Created by john on 2/01/2017.
 */

import {Component, Output, EventEmitter, Input} from "@angular/core";
import {JournalService} from "../service/journal.service";
import {Observable} from "rxjs";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import {HouseholdUser} from "../model/household-user";

@Component({
    selector: 'household-user-typeahead',
    templateUrl: 'app/template/household-user-typeahead.template.html',
    providers: [JournalService]
})
export class HouseholdUserTypeAheadComponent {
    public model: any;
    @Output() onUserSelected: EventEmitter<HouseholdUser> = new EventEmitter<HouseholdUser>();
    @Input() users: HouseholdUser[];

    constructor(){

    }

    onSelectedItem($event:any, input:any) : void {
        $event.preventDefault();
        this.onUserSelected.emit($event.item);
        input.value = "";
    }

    formatter = (result: HouseholdUser) => {
        return result;
    };

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(term => term === '' ?
                [] : this.users.filter(v => {
                        let expression = new RegExp(term, 'ig');
                        return (expression.test(v.firstname) || expression.test(v.lastname));
                    }).slice(0, 10));
}