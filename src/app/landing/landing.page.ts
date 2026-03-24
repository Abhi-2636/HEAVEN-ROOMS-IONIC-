import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonImg, IonButton, IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonContent, IonImg, IonButton, IonIcon]
})
export class LandingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  goToSignup() {
    console.log('Navigate to Sign Up');
    // this.router.navigateByUrl('/signup');
  }
}