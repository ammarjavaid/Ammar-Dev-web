
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBo4md05a12-AUPneUyO-llnshrTuHSS3M",
  authDomain: "personal-firebase-database.firebaseapp.com",
  projectId: "personal-firebase-database",
  storageBucket: "personal-firebase-database.appspot.com",
  messagingSenderId: "673398295637",
  appId: "1:673398295637:web:2ec045d964ebc2c83798dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);