import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'web-layout/lib/types/menu-item.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'vin-template';
  activeLink = 'PIM';
  userId = '';
  userName = 'tao ne';
  userAvatar = './favicon.ico';
  logo = './favicon.ico';
  menuItems: Array<MenuItem> = [];
  ListItem = [
    {
      label: 'menu1',
      url: 'menu1'
    },
    {
      label: 'menu2',
      url: 'menu2'
    },
    {
      label: 'menu3',
      url: 'menu3'
    }
  ];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'menu1',
        url: 'menu1'
      },
      {
        label: 'menu2',
        url: 'menu2'
      },
      {
        label: 'menu3',
        url: 'menu3'
      }
    ];
  }

}
