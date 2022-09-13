import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(titleService: Title) {
    titleService.setTitle(this.title);
  }

  title = 'SØREN LARSEN | BLOG';
  dev = !environment.production
}
