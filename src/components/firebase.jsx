import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Ox0ySFA57gwJEok-EN2hDiYAiI3yjsE",
  authDomain: "project-using-authentication.firebaseapp.com",
  projectId: "project-using-authentication",
  storageBucket: "project-using-authentication.appspot.com",
  messagingSenderId: "698789259650",
  appId: "1:698789259650:web:c1f8336ee201317afec79b",
  measurementId: "G-BHT87WR4R6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
