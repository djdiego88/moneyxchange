import { Component } from '@angular/core';
import { faEuroSign, faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoneyXChange';
  faEuroSign = faEuroSign;
  faHome = faHome;
  faInfoCircle = faInfoCircle;
  faEnvelope = faEnvelope;
}
