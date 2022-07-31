// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function Auth
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(UserCredential.user);
  } catch (error) {
    console.log(error.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const activeUser = await signInWithEmailAndPassword(auth, email, password);
    console.log(activeUser.user);
  } catch (error) {
    console.log(error.message);
  }
};

const resetPassword = async (email) => {
  try {
    sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error.message);
  }
};

const logOut = async () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};

export {
  auth,
  db,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  resetPassword,
  logOut,
};
