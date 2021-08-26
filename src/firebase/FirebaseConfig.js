import firebase from 'firebase'

import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdSGqasr45uJ24wIBcsYd-ZFNiRD1ug38",
    authDomain: "protfolio-2k21.firebaseapp.com",
    projectId: "protfolio-2k21",
    storageBucket: "protfolio-2k21.appspot.com",
    messagingSenderId: "80341285455",
    appId: "1:80341285455:web:96bbd51d2aa63ae956883a",
    measurementId: "G-6N3VLW3YK6"
};

export const Firebase = firebase.initializeApp(firebaseConfig)