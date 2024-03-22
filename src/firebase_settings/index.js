// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv2ZMf12eoMHhhvzarRi89F5HnCYoKn6s",
  authDomain: "cyber-keyquest.firebaseapp.com",
  projectId: "cyber-keyquest",
  storageBucket: "cyber-keyquest.appspot.com",
  messagingSenderId: "599125103761",
  appId: "1:599125103761:web:98eca87e162092246a9b30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Authentication
const auth = getAuth()

export default { analytics, db, auth };
