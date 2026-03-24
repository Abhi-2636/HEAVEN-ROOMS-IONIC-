import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonSegment,
  IonSegmentButton, IonLabel, IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent, IonImg, IonIcon, IonButtons, IonButton,
  IonFab, IonFabButton,
  // REMOVE IonList and IonItem from here!
  // IonList, IonItem,
} from '@ionic/angular/standalone';
import { PgDataService, UserProfile } from '../services/pg-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent,
    IonSearchbar, IonSegment, IonSegmentButton, IonLabel, IonCard,
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg,
    IonIcon, IonButtons, IonButton, IonFab, IonFabButton,
    // REMOVE IonList and IonItem from here as well!
    // IonList, IonItem,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  allPgListings: any[] = [];
  filteredPgListings: any[] = [];
  searchTerm: string = '';
  selectedSegment: string = 'all';
  
  userName: string = '';

  swiperParams = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 20
      }
    }
  };

  constructor(
    private router: Router,
    private pgDataService: PgDataService
  ) {}

  ngOnInit() {
    this.loadPgListings();
  }

  ionViewWillEnter() {
    this.updateFavoriteStatus();
    const profile = this.pgDataService.getUserProfile();
    this.userName = profile.name.split(' ')[0];
  }

  loadPgListings() {
    this.allPgListings = this.pgDataService.getPgListings();
    this.updateFavoriteStatus();
    this.filterPgListings();
  }

  updateFavoriteStatus() {
    this.allPgListings.forEach(pg => {
      pg.isFavorite = this.pgDataService.isFavorite(pg.id);
    });
    this.filterPgListings();
  }

  filterPgListings() {
    let temp = this.allPgListings;

    if (this.searchTerm) {
      temp = temp.filter(pg =>
        pg.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        pg.location.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedSegment !== 'all') {
      temp = temp.filter(pg => pg.location.toLowerCase() === this.selectedSegment.toLowerCase());
    }

    this.filteredPgListings = temp;
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
    this.filterPgListings();
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
    this.filterPgListings();
  }

  goToRoomDetail(pgId: number) {
    this.router.navigate(['/room-detail', pgId]);
  }

  toggleFavorite(event: Event, pg: any) {
    event.stopPropagation();
    pg.isFavorite = this.pgDataService.toggleFavorite(pg);
  }
}