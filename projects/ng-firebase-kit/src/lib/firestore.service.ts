import { Injectable, inject, signal } from '@angular/core';
import { getFirestore, collection, onSnapshot, query, QueryConstraint } from 'firebase/firestore';
import { FirebaseKitService } from './firebase-kit.service';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {
    private _firebaseKit = inject(FirebaseKitService);
    private _db = getFirestore(this._firebaseKit.app);

    /**
     * Creates a reactive Signal for a Firestore collection query
     */
    collectionSignal<T>(path: string, ...queryConstraints: QueryConstraint[]) {
        const dataSignal = signal<T[]>([]);
        const loadingSignal = signal<boolean>(true);
        const errorSignal = signal<Error | null>(null);

        const colRef = collection(this._db, path);
        const q = query(colRef, ...queryConstraints);

        // Setup real-time listener
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
                dataSignal.set(items);
                loadingSignal.set(false);
            },
            (error) => {
                errorSignal.set(error);
                loadingSignal.set(false);
            }
        );

        return {
            data: dataSignal.asReadonly(),
            loading: loadingSignal.asReadonly(),
            error: errorSignal.asReadonly(),
            unsubscribe
        };
    }
}