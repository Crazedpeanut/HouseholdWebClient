/**
 * Created by john on 14/01/2017.
 */
import {Component} from "@angular/core";
import {PAGE_TITLE_PREFIX} from "../constants";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'messages',
    template: "<p>messages</p>"
})
export class MessagesComponent {
    PAGE_TITLE: String = "Messages";

    constructor(titleService: Title) {
        titleService.setTitle(`${PAGE_TITLE_PREFIX} ${this.PAGE_TITLE}`)
    }
}
