import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Define the User interface
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  photo: string; // URL or Base64 string for the profile photo
  // password is here for mock authentication purposes (to validate password changes)
  // In a real app, you would NOT store passwords directly in the user object like this.
  password?: string;
}

const LOCAL_STORAGE_USER_KEY = 'currentUserProfile'; // Key for localStorage

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor() {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    const initialUser: User | null = storedUser ? JSON.parse(storedUser) : null;
    
    this.currentUserSubject = new BehaviorSubject<User | null>(initialUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Performs a strict login check based on email domain and password pattern.
   * If successful, it loads or creates a user profile.
   * The user profile fields (name, photo, bio, phone) are NOT reset on subsequent logins
   * if a profile already exists.
   * @param email The user's email address.
   * @param password The user's password.
   * @returns True if login is successful, false otherwise.
   */
  login(email: string, password: string): boolean {
    // 1. Strict email domain check
    if (!email.endsWith('@heavenroom.in')) {
      console.warn('Login failed: Email must end with @heavenroom.in');
      return false;
    }

    // 2. Extract 'yourname' prefix from email
    const emailPrefix = email.split('@')[0];
    const expectedPassword = `${emailPrefix}@123`;

    // 3. Strict password pattern check
    if (password !== expectedPassword) {
      console.warn(`Login failed: Password for ${emailPrefix} should be ${expectedPassword}`);
      return false;
    }

    // --- If login credentials are valid, now handle the user profile ---
    let loggedInUser: User;
    const existingUser = this.currentUserValue;

    // Check if the currently logged-in user (from local storage) matches the attempting login email
    if (existingUser && existingUser.email === email) {
        // User already exists and matches. Update only the password for this session/mock.
        // Other profile details (name, photo, bio, phone) are preserved.
        loggedInUser = { ...existingUser, password: password };
    } else {
        // This is a new login session for this specific email, or no user was previously logged in.
        // We initialize with defaults but only if a user with this email doesn't exist in local storage
        // or if it's a completely new user.
        // In a real app, you'd fetch the user's full profile from a backend here.
        
        // For our mock, let's pretend we're fetching from 'backend' (localStorage might hold previous session)
        const storedUserForThisEmail = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) || 'null');
        
        if (storedUserForThisEmail && storedUserForThisEmail.email === email) {
            // Found a profile for this email in storage (even if from a previous session)
            loggedInUser = { ...storedUserForThisEmail, password: password };
        } else {
            // No previous profile found for this email, create a new one with defaults
            loggedInUser = {
                id: emailPrefix, // Simple ID from email prefix
                name: this.capitalizeFirstLetter(emailPrefix), // Capitalize for display
                email: email,
                phone: '', // Default, user can update
                bio: 'Successfully logged in to Heaven Rooms. Edit your profile!', // Default bio
                photo: 'https://i.postimg.cc/Qt51j6tw/Whats-App-Image-2025-10-11-at-16-48-26-removebg-preview.png', // Default avatar
                password: password // Store password for change password validation
            };
        }
    }

    // Store the determined loggedInUser (either existing or newly created)
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(loggedInUser));
    this.currentUserSubject.next(loggedInUser); // Emit the new user
    
    console.log(`Login successful for ${email}`);
    return true;
  }

  logout() {
    // On logout, we intentionally clear *all* user data from local storage,
    // so the next login for the same user will re-initialize from defaults
    // or fetch from 'backend' (our mock logic above).
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    this.currentUserSubject.next(null);
    console.log('User logged out. localStorage cleared.');
  }

  /**
   * Updates the user profile fields (name, email, phone, bio, photo).
   * This does NOT affect the login password validation.
   * It's instantaneous as per previous request.
   * @param updatedProfile The updated user object containing profile details.
   * @returns A Promise that resolves to true on success, false otherwise.
   */
  updateUserProfile(updatedProfile: User): Promise<boolean> {
    const currentUser = this.currentUserValue;
    if (currentUser) {
      // Preserve the current password if it exists, as updateUserProfile should not change it
      const userToSave: User = { 
        ...currentUser, 
        ...updatedProfile,
        password: currentUser.password // Explicitly keep the existing password
      };
      
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userToSave));
      this.currentUserSubject.next(userToSave); // Emit updated user
      console.log('User profile details updated instantaneously.');
      return Promise.resolve(true);
    }
    console.warn('Cannot update profile: No user logged in.');
    return Promise.resolve(false);
  }

  /**
   * Updates only the user's password.
   * This is instantaneous as per previous request.
   * @param userId The ID of the user whose password is to be updated.
   * @param newPassword The new password.
   * @returns A Promise that resolves to true on success, false otherwise.
   */
  updatePassword(userId: string, newPassword: string): Promise<boolean> {
    const user = this.currentUserValue;
    if (user && user.id === userId) {
      user.password = newPassword; // Update password
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
      this.currentUserSubject.next(user); // Emit updated user
      console.log('User password updated instantaneously.');
      return Promise.resolve(true);
    }
    console.warn('Cannot update password: User not found or not logged in.');
    return Promise.resolve(false);
  }

  private capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}