// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

//initialize firebase
const InitializeFirebase = () => {
  initializeApp(firebaseConfig);
};
export default InitializeFirebase;
