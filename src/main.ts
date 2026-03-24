import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// --- IMPORTANT: Import ALL icons you use here ---
import { addIcons } from 'ionicons';
import {
  // Landing/Login Page Icons
  personOutline, lockClosedOutline, logInOutline, arrowForwardOutline,
  logoGoogle, logoApple,

  // Tab Bar Icons (outline for default, sharp for active/platform specific)
  homeOutline, homeSharp,
  bookOutline, bookSharp,      // For bookings
  heartOutline, heartSharp,    // For favourite
  personCircleOutline, personCircleSharp, // For profile (using person-circle for distinct profile icon)
  // If you had a search tab, you'd add: searchOutline, searchSharp,
} from 'ionicons/icons';


if (environment.production) {
  enableProdMode();
}

// --- IMPORTANT: Add ALL imported icons here ---
addIcons({
  // Landing/Login Page Icons
  personOutline, lockClosedOutline, logInOutline, arrowForwardOutline,
  logoGoogle, logoApple,

  // Tab Bar Icons
  homeOutline, homeSharp,
  bookOutline, bookSharp,
  heartOutline, heartSharp,
  personCircleOutline, personCircleSharp,
  // searchOutline, searchSharp, // Uncomment if you add a search tab later
});


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
  ],
});