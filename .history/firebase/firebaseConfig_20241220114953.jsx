// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjrBVoi3VRsAd0Q2N6QSy8U86SgU9AIjk",
  authDomain: "shop-app-5a781.firebaseapp.com",
  projectId: "shop-app-5a781",
  storageBucket: "shop-app-5a781.firebasestorage.app",
  messagingSenderId: "1062469385963",
  appId: "1:1062469385963:web:742a53c475cf27a71d48ae",
  measurementId: "G-E1V9T1N62G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app, { persistence: getReactNativePersistence(AsyncStorage),