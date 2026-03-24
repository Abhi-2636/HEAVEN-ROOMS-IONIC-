import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, 
  IonList, IonItem, IonInput, IonTextarea, IonButton, IonAvatar 
} from '@ionic/angular/standalone';
import { PgDataService, UserProfile } from '../../services/pg-data.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonBackButton, IonList, IonItem, IonInput, IonTextarea, IonButton, IonAvatar
  ]
})
export class EditProfilePage implements OnInit {
  // Initialize with 'photo' property
  profile: UserProfile = { name: '', email: '', phone: '', bio: '', photo: '' };

  constructor(
    private pgService: PgDataService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    // Load data
    this.profile = { ...this.pgService.getUserProfile() };
  }

  // 1. Handle File Selection
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // This 'result' is the Base64 string of the image
        if (reader.result) {
          this.profile.photo = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  async saveProfile() {
    this.pgService.updateUserProfile(this.profile);
    
    const toast = await this.toastCtrl.create({
      message: 'Profile updated successfully!',
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    await toast.present();

    this.router.navigate(['/tabs/profile']);
  }
}