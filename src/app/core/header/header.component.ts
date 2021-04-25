import { Component } from '@angular/core';

import { HamburgerButtonService } from './hamburguer-button/hamburger-button.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private hamburgerButtonService: HamburgerButtonService) { }

  closeMenu() {
    this.hamburgerButtonService.closeMenu();
  }

}
