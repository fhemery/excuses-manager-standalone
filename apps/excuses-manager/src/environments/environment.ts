// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'excuses-manager',
    appId: '1:534627786148:web:7e60441358aa37c67df531',
    storageBucket: 'excuses-manager.appspot.com',
    apiKey: 'AIzaSyBNRYGfXMAJb42M-8eJ_1nmnACrXr11s5A',
    authDomain: 'excuses-manager.firebaseapp.com',
    messagingSenderId: '534627786148',
  },
  production: false,
  apiUrl: '/api',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
