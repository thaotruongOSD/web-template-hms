import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../types/menu-item.type';

@Component({
  selector: 'lib-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  constructor() { }

  @Input()
  listItem: Array<MenuItem> = [];
  @Input()
  userName: string;
  @Input()
  userAvatar: string;
  @Input()
  sidebarTitle = 'Sidebar Title';
  @Output()  clickMenuItem = new EventEmitter<MenuItem>();

  ngOnInit() {
  }

  onClickMenuItem(e: MenuItem) {
    this.clickMenuItem.emit(e);
  }
}
