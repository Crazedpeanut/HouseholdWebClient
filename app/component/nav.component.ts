import { Component } from '@angular/core';

@Component({
  selector: 'household-nav',
  templateUrl: 'app/template/nav.template.html'
})
export class NavComponent  {
  public isCollapsed = false;
  title = "Household";
}
