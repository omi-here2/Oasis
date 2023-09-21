// src/firebase.js
import { initializeApp } from 'firebase/app'
import {getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAa5AvA7p9dVqS-hZCSYX2Szy874DeLJYk",
  authDomain: "reactform-8fbf4.firebaseapp.com",
  databaseURL: "https://reactform-8fbf4-default-rtdb.firebaseio.com",
  projectId: "reactform-8fbf4",
  storageBucket: "reactform-8fbf4.appspot.com",
  messagingSenderId: "452659408500",
  appId: "1:452659408500:web:41d879726c70ae082aab21"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);