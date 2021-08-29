import { Component, OnInit } from '@angular/core';

import topMenu from '../util/menu-list';

@Component({
  selector: 'Menu-Screen',
  template: `
    <ul class="nav navbar-nav navbar-right" style="position: relative; top: 1px;">
      <li *ngFor="let item of items">
        <a href="{{item.link}}" style="font-size: 12px;">{{item.name}}</a>
      </li>
    </ul>
    `
})
export class MenuComponent implements OnInit {

  items: { id:number, name:string, link:string, topLink:string }[];

  constructor() {
    this.items = topMenu;
  }

  ngOnInit(): void {
  }

}
