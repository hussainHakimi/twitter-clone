// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyC14xsSfKbysRP29vVJS91GzXCRhONvS0Q",
  authDomain: "twitter-clone-c3666.firebaseapp.com",
  projectId: "twitter-clone-c3666",
  storageBucket: "twitter-clone-c3666.appspot.com",
  messagingSenderId: "353423065303",
  appId: "1:353423065303:web:3fd1ed2b981e7e11abb092"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };


