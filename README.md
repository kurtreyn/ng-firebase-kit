# NgFirebaseKit

This project is a starter kit for integrating Angular with Firebase, providing a streamlined setup for building modern web applications with Angular and Firebase services.

## Requirements

- Angular 22 or later
- Firebase project setup
- Node.js 22 or later

## Usage

To use this library in your Angular project, follow these steps:

1. Install the library via npm:

```bash
npm install ng-firebase-kit
```

2. In `app.config.ts` or your main configuration file, initialize Firebase using the provided configuration from your Firebase project. For example:

```typescript
import { FIREBASE_OPTIONS } from 'ng-firebase-kit';

const firebaseConfig = {
  apiKey: '<YOUR_API_KEY>',
  authDomain: '<YOUR_AUTH_DOMAIN>',
  databaseURL: '<YOUR_DATABASE_URL>',
  projectId: '<YOUR_PROJECT_ID>',
  storageBucket: '<YOUR_STORAGE_BUCKET>',
  messagingSenderId: '<YOUR_MESSAGING_SENDER_ID>',
  appId: '<YOUR_APP_ID>',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: FIREBASE_OPTIONS,
      useValue: {
        ...firebaseConfig,
      },
    },
  ],
};
```
