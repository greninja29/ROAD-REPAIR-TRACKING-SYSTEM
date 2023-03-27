import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBcJ6NL-s2mLnqXi00bX-bKbhB69ztSzsA",
  authDomain: "rrts-d8083.firebaseapp.com",
  projectId: "rrts-d8083",
  storageBucket: "rrts-d8083.appspot.com",
  messagingSenderId: "559852312582",
  appId: "1:559852312582:web:a0513bde06f47c94448b87",
  measurementId: "G-64XJEV2LSH"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)
