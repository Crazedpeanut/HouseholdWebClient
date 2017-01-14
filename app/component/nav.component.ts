import {Component, Input, OnInit} from '@angular/core';
import {SessionService} from "../service/session.service";
import {HouseholdUser} from "../model/household-user";
import {Household} from "../model/household";

@Component({
  selector: 'household-nav',
  templateUrl: 'app/template/nav.template.html',
  providers: [ SessionService ]
})
export class NavComponent implements OnInit {
  @Input() title: String;
  public isCollapsed = false;

  public currentUser: HouseholdUser;
  public currentHousehold: Household;

  constructor(private sessionService: SessionService) {
  }


  ngOnInit(): void {
    this.currentUser = this.sessionService.getLoggedInUser();
    this.currentHousehold = this.sessionService.getCurrentHousehold();
  }
}