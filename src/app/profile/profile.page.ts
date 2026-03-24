import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonList, IonItem,
  IonIcon, IonLabel, IonButton, IonListHeader
} from '@ionic/angular/standalone';
import { PgDataService, UserProfile } from '../services/pg-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonList,
    IonItem, IonIcon, IonLabel, IonButton, IonListHeader
  ],
})
export class ProfilePage {
  user: UserProfile | undefined;

  constructor(
    private router: Router,
    private pgService: PgDataService
  ) { }

  // Load fresh data every time the view enters
  ionViewWillEnter() {
    this.user = this.pgService.getUserProfile();
  }

  onEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  onHelpSupport() {
    console.log('Help & Support Tapped!');
  }

  logout() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}