// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBKldifMz7O7X8oPaVZrMvTYA31y7YvONg',
    authDomain: 'my-firebase-test-982ac.firebaseapp.com',
    databaseURL: 'https://my-firebase-test-982ac.firebaseio.com',
    projectId: 'my-firebase-test-982ac',
    storageBucket: 'my-firebase-test-982ac.appspot.com',
    messagingSenderId: '606037919278'
  }
};
