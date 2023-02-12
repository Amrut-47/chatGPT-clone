import {getApp, getApps, initializeApp} from 'firebase/app';

import { getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf4OnYpigL8lgZFbwmL8fWQEvzin85yIM",
  authDomain: "chatgpt-messanger-app.firebaseapp.com",
  projectId: "chatgpt-messanger-app",
  storageBucket: "chatgpt-messanger-app.appspot.com",
  messagingSenderId: "431443897255",
  appId: "1:431443897255:web:cacbe83f36c89bd681a482"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db }