// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  process.env.VUE_APP_API_KEY,
  process.env.VUE_APP_AUTH_DOMAIN,
  process.env.VUE_APP_PROJECT_ID,
  process.env.VUE_APP_STORAGE_BUCKET,
  process.env.VUE_APP_MESSGING_SENDER_ID,
  process.env.VUE_APP_APP_ID_1,
  process.env.VUE_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);