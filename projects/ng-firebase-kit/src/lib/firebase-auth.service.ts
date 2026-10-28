import { Injectable, signal, inject } from '@angular/core';
import { getAuth, onAuthStateChanged, User, signOut } from 'firebase/auth';
import { FirebaseKitService } from './firebase-kit.service';

@Injectable({
    providedIn: 'root'
})
export class FirebaseAuthService {
    private _firebaseKit = inject(FirebaseKitService);
    private _auth = getAuth(this._firebaseKit.app);

    // Private mutable signal, exposed as read-only
    private _currentUserSignal = signal<User | null>(null);
    public readonly user = this._currentUserSignal.asReadonly();

    constructor() {
        onAuthStateChanged(this._auth, (user) => {
            this._currentUserSignal.set(user);
        });
    }

    async logout() {
        return signOut(this._auth);
    }
}