import { Injectable } from '@angular/core';

// Define the UserProfile interface
export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  bio: string;
  photo?: string; // Optional field for the user's profile picture (Base64 string)
}

@Injectable({
  providedIn: 'root'
})
export class PgDataService {
  // Static Room/PG Listings data
  private pgListings = [
    { id: 1, name: 'SP Bhargav 1', location: 'Lawgate', rent: 7000, image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', amenities: ['❄️ A/C', '🛏️ Bed', '🧺 Mattress', '🧳 Wardrobe', '🧊 Fridge', '💧 RO Water'], description: 'A fully furnished single-sharing PG, conveniently located just a 2-minute walk from the LPU main gate.' },
    { id: 2, name: 'SP Bhargav 2', location: 'Lawgate', rent: 6500, image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg', amenities: ['❄️ A/C', '🧊 Fridge', '🛏️ Bed', '🧺 Mattress', '📶 Wi-Fi', '🍽️ Meals'], description: 'Cozy and affordable double-sharing rooms equipped with all necessary amenities.' },
    { id: 3, name: 'Preet Villa', location: 'Green Valley', rent: 8500, image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg', amenities: ['❄️ A/C', '🧊 Fridge', '🛏️ Bed', '🧺 Mattress', '🧳 Wardrobe', '💧 RO Water'], description: 'Experience spacious living in Green Valley with premium furniture and a private balcony.' },
    { id: 4, name: 'IPS Villa', location: 'Green Valley', rent: 9000, image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg', amenities: ['❄️ A/C', '🧊 Fridge', '🛏️ Bed', '📝 Study Table', '💧 RO Water', '🧹 Cleaning'], description: 'Luxury rooms designed for serious students, featuring a dedicated study table and daily cleaning.' },
    { id: 5, name: 'Ambey Apartment', location: 'Maingate', rent: 10000, image: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg', amenities: ['❄️ A/C', '🧊 Fridge', '🛏️ Bed', '🧳 Wardrobe', '🍳 Kitchen Access'], description: 'Premium, independent apartment-style rooms near the Maingate with kitchen access.' },
  ];

  // Application-wide data stores
  private favorites: any[] = [];
  private bookings: any[] = [];
  private userProfile: UserProfile = {
    name: 'Abhishek Kumar',
    email: 'abhishek.kumar@lpu.in',
    phone: '+91 98765 43210',
    bio: '3rd Year BCA Student at LPU',
    photo: '' // Default empty photo, will use fallback in HTML
  };

  constructor() {
    this.loadData(); // Load all data from local storage when the service starts
  }

  // --- LOCAL STORAGE PERSISTENCE ---
  private saveData() {
    localStorage.setItem('heaven_favorites', JSON.stringify(this.favorites));
    localStorage.setItem('heaven_bookings', JSON.stringify(this.bookings));
    localStorage.setItem('heaven_profile', JSON.stringify(this.userProfile));
  }

  private loadData() {
    const favs = localStorage.getItem('heaven_favorites');
    if (favs) {
      try {
        this.favorites = JSON.parse(favs);
      } catch (e) {
        console.error("Error parsing favorites from local storage", e);
        this.favorites = [];
      }
    }

    const books = localStorage.getItem('heaven_bookings');
    if (books) {
      try {
        this.bookings = JSON.parse(books);
      } catch (e) {
        console.error("Error parsing bookings from local storage", e);
        this.bookings = [];
      }
    }

    const profile = localStorage.getItem('heaven_profile');
    if (profile) {
      try {
        this.userProfile = JSON.parse(profile);
      } catch (e) {
        console.error("Error parsing user profile from local storage", e);
        // Reset to default if parsing fails
        this.userProfile = { name: 'Abhishek Kumar', email: 'abhishek.kumar@lpu.in', phone: '+91 98765 43210', bio: '3rd Year BCA Student at LPU', photo: '' };
      }
    }
  }

  // --- PG LISTING METHODS ---
  getPgListings() {
    return this.pgListings;
  }

  getPgById(id: number) {
    return this.pgListings.find(pg => pg.id === id);
  }

  // --- FAVORITES METHODS ---
  getFavorites() {
    return this.favorites;
  }

  isFavorite(pgId: number): boolean {
    return this.favorites.some(pg => pg.id === pgId);
  }

  toggleFavorite(pg: any): boolean {
    const index = this.favorites.findIndex(fav => fav.id === pg.id);
    let added = false;
    if (index > -1) {
      this.favorites.splice(index, 1);
      added = false;
    } else {
      this.favorites.push(pg);
      added = true;
    }
    this.saveData(); // Persist changes
    return added;
  }

  // --- BOOKING METHODS ---
  getBookings() {
    return this.bookings;
  }

  addBooking(pg: any) {
    // Check if a booking for this PG already exists (optional, remove if multiple bookings of same PG are allowed)
    const exists = this.bookings.some(b => b.id === pg.id);
    if (!exists) {
      const newBooking = {
        ...pg, // Spread existing PG properties
        bookingDate: new Date().toISOString(), // Store the exact current date/time
        dates: 'Oct 2025 - Mar 2026', // Example duration
        rating: 0 // Default rating
      };
      this.bookings.unshift(newBooking); // Add to the beginning of the list
      this.saveData(); // Persist changes
    }
  }

  updateRating(bookingId: number, rating: number) {
    const booking = this.bookings.find(b => b.id === bookingId);
    if (booking) {
      booking.rating = rating;
      this.saveData(); // Persist changes
    }
  }

  // --- USER PROFILE METHODS ---
  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  updateUserProfile(updatedProfile: UserProfile) {
    this.userProfile = updatedProfile;
    this.saveData(); // Persist changes
  }
}