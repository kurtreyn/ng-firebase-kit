import { Injectable, InjectionToken, Inject } from '@angular/core';
import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app';

export const FIREBASE_OPTIONS = new InjectionToken<FirebaseOptions>('FIREBASE_OPTIONS');

@Injectable({
    providedIn: 'root'
})
export class FirebaseKitService {
    public app: FirebaseApp;

    constructor(@Inject(FIREBASE_OPTIONS) options: FirebaseOptions) {
        this.app = initializeApp(options);
    }
}