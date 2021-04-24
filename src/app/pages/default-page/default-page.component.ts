import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent {

  @Input() title = '';
  @Input() code = '';
  showPreview = true;

  changeView() {
    this.showPreview = !this.showPreview;
  }

}
