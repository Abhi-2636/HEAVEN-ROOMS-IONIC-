import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone'; // <-- IonIcon must be here

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel // <-- IonIcon must be here
  ]
})
export class TabsPage {
  constructor() {}
}