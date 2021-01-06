 import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOxFs6s5rDDZdRO25t2KQEFQ9qipM-BVI",
  authDomain: "school-attendance-app-87871.firebaseapp.com",
  databaseURL: "https://school-attendance-app-87871-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-87871",
  storageBucket: "school-attendance-app-87871.appspot.com",
  messagingSenderId: "612141244404",
  appId: "1:612141244404:web:d27f613f1b83ae75a0e3a1"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  