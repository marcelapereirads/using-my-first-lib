import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HamburgerButtonService {

  isMobile = this.breakpointObserver.isMatched('(min-width: 768px)');
  menuIsOpen = this.isMobile;
  buttonClicked$ = new BehaviorSubject<boolean>(this.menuIsOpen);

  constructor(private breakpointObserver: BreakpointObserver) { }

  emitClick(): void {
    if (!this.isMobile) {
      this.menuIsOpen = !this.menuIsOpen;
      this.buttonClicked$.next(this.menuIsOpen);
    }
  }

  closeMenu(): void {
    if (!this.isMobile) {
      this.menuIsOpen = false;
    }
  }

  getOpen(): Observable<boolean> {
    return this.buttonClicked$.asObservable();
  }
}
