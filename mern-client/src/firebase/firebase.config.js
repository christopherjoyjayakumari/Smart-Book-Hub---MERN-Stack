// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDspEgFsNpJN73TrHVOmWmGhTJYRu91xaw",
  authDomain: "smart-bookhub.firebaseapp.com",
  projectId: "smart-bookhub",
  storageBucket: "smart-bookhub.appspot.com",
  messagingSenderId: "568337510178",
  appId: "1:568337510178:web:de190315012eba93197f7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;