// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDgptjkue0GM71T06kOuN-EDaq1iuGxt3U",
  authDomain: "sonaportfolio-5ebbd.firebaseapp.com",
  projectId: "sonaportfolio-5ebbd",
  storageBucket: "sonaportfolio-5ebbd.appspot.com",
  messagingSenderId: "811114882579",
  appId: "1:811114882579:web:5d7b8abf343cd3005801e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
