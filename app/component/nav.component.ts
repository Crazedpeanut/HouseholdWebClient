import {Component, Input} from '@angular/core';

@Component({
  selector: 'household-nav',
  templateUrl: 'app/template/nav.template.html'
})
export class NavComponent  {
  @Input() title: String;
  public isCollapsed = false;
}
