import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from '../types/menu-item.type';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  pushRightClass = 'push-right';
  @Input()
  menuItems: Array<MenuItem> = [];
  @Input()
  title: string;
  @Input()
  userName: string;
  @Input()
  logo: string;
  @Input()
  userAvatar: string;

  @Output() clickMenuItem = new EventEmitter<MenuItem>();
  @Output() clickUserProfile = new EventEmitter<any>();
  @Output() clickLogout = new EventEmitter<any>();

  isToggled(): boolean {
    const dom = document.querySelector('body');
    return dom ? dom.classList.contains(this.pushRightClass) : false;
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  onClickMenuItem(e: MenuItem) {
    this.clickMenuItem.emit(e);
  }

  public onClickUserName(e: any) {
    this.clickUserProfile.emit(e);
  }

  public onClickLogout(e: any) {
    this.clickLogout.emit(e);
  }

  constructor(public router: Router) {
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
   }
}
