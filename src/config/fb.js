import { initializeApp, firestore } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import Constants from "expo-constants";
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.measurementId,
  appId: Constants.manifest.extra.appId,
  measurementId: Constants.manifest.extra.measurementId,
};

initializeApp(firebaseConfig);
export const database = getFirestore();
export const storage = getStorage();
