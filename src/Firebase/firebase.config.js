// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Tj509UWRZ3QpCs1lQ9w6P_abFa-3taw",
  authDomain: "chef-recipe-hunter-23ee6.firebaseapp.com",
  projectId: "chef-recipe-hunter-23ee6",
  storageBucket: "chef-recipe-hunter-23ee6.appspot.com",
  messagingSenderId: "9388482411",
  appId: "1:9388482411:web:17d733ff2e87499275b62e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;