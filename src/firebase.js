// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  process.env.API_KEY,
  process.env.AUTH_DOMAIN,
  process.env.PROJECT_ID,
  process.env.STORAGE_BUCKET,
  process.env.MESSGING_SENDER_ID,
  process.env.APP_ID_1,
  process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);