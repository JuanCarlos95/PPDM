import firebase from 'firebase/app'
import 'firebase/firestore'




// FIREBASE DO EDÉCIO


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAngfUGWn_LraE4HXsHkufc9-Lvlgqn6IE",
    authDomain: "leilaoobras.firebaseapp.com",
    databaseURL: "https://leilaoobras.firebaseio.com",
    projectId: "leilaoobras",
    storageBucket: "leilaoobras.appspot.com",
    messagingSenderId: "807011193786",
    appId: "1:807011193786:web:4a736e9418304a9ff84383"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();





















// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyDSsyw6bHEUKesktqs1hZDHgPXl2V5_wlU",
//     authDomain: "obras-f4309.firebaseapp.com",
//     databaseURL: "https://obras-f4309.firebaseio.com",
//     projectId: "obras-f4309",
//     storageBucket: "obras-f4309.appspot.com",
//     messagingSenderId: "462728776473",
//     appId: "1:462728776473:web:c1f49822d4f0c807ca1388"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);