import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC33YneQWJz9R-IbE9yMqcyKUJDyLfhH4Y",
  authDomain: "podcasty-b94ca.firebaseapp.com",
  projectId: "podcasty-b94ca",
  storageBucket: "podcasty-b94ca.appspot.com",
  messagingSenderId: "1094807881290",
  appId: "1:1094807881290:web:10eddb9b7f24e46279c8b3",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth();
const db = getFirestore();

export { auth, db };
