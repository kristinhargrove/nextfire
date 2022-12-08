import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAD4lTLPS3Xl9LJsubj0NjcJ3eskCnLqXY",
  authDomain: "nextfire-ac9e1.firebaseapp.com",
  projectId: "nextfire-ac9e1",
  storageBucket: "nextfire-ac9e1.appspot.com",
  messagingSenderId: "505224958398",
  appId: "1:505224958398:web:219e5b47ec8cd73d5b29ef",
  measurementId: "G-3BCGY16GKY"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();