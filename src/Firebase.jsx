import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDjJefvDMgxg2lwVlsqndYyZvt6ynD9k5Y",
  authDomain: "whatschat-5419f.firebaseapp.com",
  projectId: "whatschat-5419f",
  storageBucket: "whatschat-5419f.appspot.com",
  messagingSenderId: "798663763295",
  appId: "1:798663763295:web:965136f8e89617a04b82ea",
  measurementId: "G-8HFV7KVSLE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
