import { Component } from '@angular/core';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moneyxchange';
  faEuroSign = faEuroSign;
}
