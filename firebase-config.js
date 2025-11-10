// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAeMqPwxibxDMwe4jmv-U5ZScyi4Lkhw98",
  authDomain: "proximate-3f8cd.firebaseapp.com",
  projectId: "proximate-3f8cd",
  storageBucket: "proximate-3f8cd.firebasestorage.app",
  messagingSenderId: "258415586099",
  appId: "1:258415586099:web:34bfc4907fe4cf50aa6c46",
  measurementId: "G-6VT3NXZKHS"
};

// ✅ Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
