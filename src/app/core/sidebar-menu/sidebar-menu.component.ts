import { Component } from '@angular/core';

import { HamburgerButtonService } from '../header/hamburguer-button/hamburger-button.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {

  menuItems = [
    {
      name: 'Input',
      url: '/input'
    },
    {
      name: 'Select',
      url: '/select'
    },
    {
      name: 'Button',
      url: '/button'
    }
  ];

  constructor(private hamburgerButtonService: HamburgerButtonService) { }

  closeMenu() {
    this.hamburgerButtonService.emitClick();
  }
}
