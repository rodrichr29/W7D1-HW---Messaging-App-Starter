// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDK5jygCZM4tp5mtSYkYHDqgfgB3_EiKFs",
    authDomain: "message-app-rodrichr29.firebaseapp.com",
    projectId: "message-app-rodrichr29",
    storageBucket: "message-app-rodrichr29.appspot.com",
    messagingSenderId: "1032807301990",
    appId: "1:1032807301990:web:c79642e498e9716ecb7ea7"
});

// Initialize Firebase
export default firebaseConfig;