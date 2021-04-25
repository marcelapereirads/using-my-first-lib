import { Component } from '@angular/core';

import { HamburgerButtonService } from './hamburger-button.service';

@Component({
  selector: 'app-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.scss']
})
export class HamburgerButtonComponent {

  constructor(private hamburgerButtonService: HamburgerButtonService) { }

  emitClick() {
    this.hamburgerButtonService.emitClick();
  }

}
