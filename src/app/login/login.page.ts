import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton,
  IonList, IonItem, IonImg, IonButtons, IonBackButton
  // IonIcon has been removed from the list above
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar,
    IonInput, IonButton, IonList, IonItem, IonImg, IonButtons, IonBackButton
    // IonIcon has been removed from this list as well
  ]
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('Login Button Clicked');
    // Navigate to the Home Page inside the tabs
    this.router.navigateByUrl('/tabs/home');
  }

  goToSignup() {
    console.log('Go to signup');
  }
}