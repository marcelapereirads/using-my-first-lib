import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { HamburgerButtonService } from './core/header/hamburguer-button/hamburger-button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'storybook-study';
  menuSubscription$!: Subscription;
  menuIsOpen = true;

  constructor(private hamburgerButtonService: HamburgerButtonService) { }

  ngOnInit() {
    this.verifyMenuOpen();
  }

  ngOnDestroy() {
    this.menuSubscription$.unsubscribe();
  }

  verifyMenuOpen() {
    this.menuSubscription$ = this.hamburgerButtonService.getOpen().subscribe((isOpen: boolean) => this.menuIsOpen = isOpen);
  }

}
