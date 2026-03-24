import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.initializeAppTheme();
  }

  initializeAppTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (savedTheme) {
      document.body.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.body.classList.toggle('dark', prefersDark.matches);
    }
  }
}