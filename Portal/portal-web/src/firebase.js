import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'; 

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAX35QSLoGRcr3HEHtRyrhb1n-oYyBG8uo",
    authDomain: "flexdevstudio-95140.firebaseapp.com",
    databaseURL: "https://flexdevstudio-95140-default-rtdb.firebaseio.com",
    projectId: "flexdevstudio-95140",
    storageBucket: "flexdevstudio-95140.appspot.com",
    messagingSenderId: "351860169562",
    appId: "1:351860169562:web:8ab6a8fa440ab1abd5f163",
    measurementId: "G-B7923ZN9NZ"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

class Firebase {

    constructor(){
        app.initializeApp(firebaseConfig);
    }

    /* FIREBASE METODS BEGIN */
    /* FIREBASE METODS END   */

    isInitialized(){
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
            console.log('# FIREBASE SUCCESS.');
        })
    }

}

export default new Firebase();
