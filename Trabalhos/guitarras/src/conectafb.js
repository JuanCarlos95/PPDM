import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC4R-V5L9_lG87SjjiHju6f9gIABWpUdBU",
  authDomain: "trab-guitar-world.firebaseapp.com",
  databaseURL: "https://trab-guitar-world.firebaseio.com",
  projectId: "trab-guitar-world",
  storageBucket: "trab-guitar-world.appspot.com",
  messagingSenderId: "687027829882",
  appId: "1:687027829882:web:d2f53b60cf199a9cc6cfc3"
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();