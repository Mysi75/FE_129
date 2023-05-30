import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO7W5nW_6IHMizC5sKD5K1JcAgW9c2ckA",
    authDomain: "my-organaize.firebaseapp.com",
    databaseURL: "https://my-organaize-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-organaize",
    storageBucket: "my-organaize.appspot.com",
    messagingSenderId: "409550422333",
    appId: "1:409550422333:web:d3b32407d8305258c4c554",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);