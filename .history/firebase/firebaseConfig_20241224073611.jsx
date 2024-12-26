import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: A,
  authDomain: "shop-app-5a781.firebaseapp.com",
  projectId: "shop-app-5a781",
  storageBucket: "shop-app-5a781.appspot.com",
  messagingSenderId: "1062469385963",
  appId: "1:1062469385963:web:742a53c475cf27a71d48ae",
  measurementId: "G-E1V9T1N62G"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
