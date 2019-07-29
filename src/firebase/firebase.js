import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBuhJFouDyWmzstp1NS9aFvLJiWku6YPoI",
  authDomain: "ecom-db-8a066.firebaseapp.com",
  databaseURL: "https://ecom-db-8a066.firebaseio.com",
  projectId: "ecom-db-8a066",
  storageBucket: "",
  messagingSenderId: "644280293082",
  appId: "1:644280293082:web:7ae76a189fd91930"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
