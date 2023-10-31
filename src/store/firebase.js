import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyB9TVDOfmr3hxB7oFhmKuOPyX9j93nEG4s",
  authDomain: "spotify-auth-c4e29.firebaseapp.com",
  projectId: "spotify-auth-c4e29",
  storageBucket: "spotify-auth-c4e29.appspot.com",
  messagingSenderId: "205544152930",
  appId: "1:205544152930:web:ade8d1fa2834cc9d01d63b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;