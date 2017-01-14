import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {PAGE_TITLE_PREFIX} from "../constants";

@Component({
    selector: 'dashboard',
    templateUrl: 'app/template/dashboard.template.html',
    providers: [ ]
})
export class DashboardComponent {
    PAGE_TITLE: String = "Dashboard";

    constructor(titleService: Title) {
        titleService.setTitle(`${PAGE_TITLE_PREFIX} ${this.PAGE_TITLE}`)
    }
}
