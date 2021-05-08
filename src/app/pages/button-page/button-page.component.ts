import { Component} from '@angular/core';

@Component({
  selector: 'app-button-page',
  templateUrl: './button-page.component.html'
})
export class ButtonPageComponent {

  readonly code = `<app-button type="primary" [action]="showAlert"></app-button>`;

  showAlert = () => {
    alert('Clicked');
  }

}
