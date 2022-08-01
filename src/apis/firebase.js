// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const register = async (email, password) => {
    // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth
    await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const navigate = useNavigate();
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === "auth/wrong-password") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong Password!",
        });
      }
      if (errorCode === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found!",
        });
      }
    });
};

// Fungsi untuk Login
const login = async (email, password) => {
    // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
    await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const navigate = useNavigate();
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === "auth/wrong-password") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong Password!",
        });
      }
      if (errorCode === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found!",
        });
      }
    });
};

// Fungsi untuk reset Password
const resetPassword = async (email) => {
    // Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail

    await sendPasswordResetEmail(auth, email)
    .then((res) => console.log(res))
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: errorMessage,
      });
    });
};

// Fungsi untuk sign out
const logout = async () => {
    // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#next_steps
    await signOut(auth)
    .then((res) => {
      console.log("success logout", res);
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
};

// Export function
export {
    auth,
    db,
    register,
    login,
    resetPassword,
    logout,
};



