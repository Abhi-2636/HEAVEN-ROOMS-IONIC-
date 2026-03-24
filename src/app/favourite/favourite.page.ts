import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonList, IonItemSliding,
  IonItem, IonThumbnail, IonLabel, IonItemOptions, IonItemOption, IonButton
} from '@ionic/angular/standalone';
import { PgDataService } from '../services/pg-data.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonList,
    IonItemSliding, IonItem, IonThumbnail, IonLabel, IonItemOptions, IonItemOption, IonButton
  ],
})
export class FavouritePage {
  favoriteItems: any[] = [];

  constructor(
    private pgDataService: PgDataService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ionViewWillEnter() {
    // Refresh the list every time the page is viewed
    this.favoriteItems = this.pgDataService.getFavorites();
  }

  // Remove item from favorites and update the view
  removeFavorite(pg: any) {
    this.pgDataService.toggleFavorite(pg);
    this.favoriteItems = this.pgDataService.getFavorites();
  }

  // This is the same booking logic from the room detail page
  async confirmBooking(pg: any) {
    const alert = await this.alertController.create({
      header: 'Confirm Booking',
      message: `Are you sure you want to book a room at ${pg.name}?`,
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Confirm',
          handler: () => {
            const navigationExtras: NavigationExtras = {
              state: { newBooking: pg }
            };
            this.router.navigate(['/tabs/bookings'], navigationExtras);
          },
        },
      ],
    });
    await alert.present();
  }
}