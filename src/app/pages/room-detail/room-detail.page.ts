import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonImg,
  IonChip, IonLabel, IonText, IonFooter, IonButton
  // IonIcon has been removed from the list above and below
} from '@ionic/angular/standalone';
import { PgDataService } from '../../services/pg-data.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.page.html',
  styleUrls: ['./room-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
    IonContent, IonImg, IonChip, IonLabel, IonText, IonFooter, IonButton
  ],
})
export class RoomDetailPage implements OnInit {
  room: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pgDataService: PgDataService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    const roomId = +this.route.snapshot.paramMap.get('id')!;
    this.room = this.pgDataService.getPgById(roomId);
  }

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