// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId:process.NEXT_PUBLIC_MESSAGING_SENDER_ID ,
  appId:process.NEXT_PUBLIC_APP_ID,
  measurementId: process.NEXT_PUBLIC_MEASUREMENT_ID ,
  databaseURL: "https://logistics-service-e4b14-default-rtdb.firebaseio.com",
};
console.log(firebaseConfig.databaseURL)
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);