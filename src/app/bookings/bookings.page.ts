import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton,
  IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton,
  IonIcon, IonImg // <--- ADD IonImg HERE
} from '@ionic/angular/standalone';
import { PgDataService } from '../services/pg-data.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment,
    IonSegmentButton, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCardContent, IonButton, IonIcon,
    IonImg // <--- AND ADD IonImg HERE
  ],
})
export class BookingsPage {
  segment = 'past'; // Default to Past to see bookings
  ongoingBookings: any[] = []; // This will hold Favorites (as requested)
  pastBookings: any[] = [];    // This will hold Actual Bookings

  constructor(
    private router: Router,
    private pgDataService: PgDataService
  ) {}

  ionViewWillEnter() {
    // 1. Handle new booking coming from "Book Now"
    const state = history.state as { newBooking: any };
    if (state?.newBooking) {
      this.pgDataService.addBooking(state.newBooking);
      // Clear state so it doesn't add again on refresh
      history.replaceState({}, '');
    }

    // 2. Load Data based on your request
    this.loadData();
  }

  loadData() {
    // REQUEST: "Show all the favourite in ongoing booking"
    this.ongoingBookings = this.pgDataService.getFavorites();

    // REQUEST: "Store all the past booking elements in past booking"
    this.pastBookings = this.pgDataService.getBookings();
  }

  rateBooking(booking: any, rating: number) {
    // Update rating in service
    this.pgDataService.updateRating(booking.id, rating);
    // Update local view
    booking.rating = rating;
  }
}