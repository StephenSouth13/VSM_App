// firebase/firebase.js
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD2v2FpofqvVryXaBOZNZuAui20SIGy0y0",
  authDomain: "vsmorgvn-c143c.firebaseapp.com",
  projectId: "vsmorgvn-c143c",
  storageBucket: "vsmorgvn-c143c.appspot.com", // sửa chỗ `.app` thành `.com`
  messagingSenderId: "1060387173081",
  appId: "1:1060387173081:web:01340343b8bd37aad044c8",
  measurementId: "G-CTQ0V10VBN"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
