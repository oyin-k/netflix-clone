import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCslaKG38cYQjOdZ-lCRDDJdZIQ5e65gEE",
  authDomain: "netflix-clone-a0d5e.firebaseapp.com",
  databaseURL: "https://netflix-clone-a0d5e.firebaseio.com",
  projectId: "netflix-clone-a0d5e",
  storageBucket: "netflix-clone-a0d5e.appspot.com",
  messagingSenderId: "959113807353",
  appId: "1:959113807353:web:7c4150814706e1eb7d2928",
  measurementId: "G-W5NNQ09L2Y",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
