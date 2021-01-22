import firebase from 'firebase/app'
import 'firebase/auth'

//process.env is referencing src/.env.local
// Initialize Firebase
const config = {
   apiKey: process.env.VIZCOM_FIREBASE_API_KEY,
   authDomain: process.env.VIZCOM_FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.VIZCOM_FIREBASE_DATABASE_URL,
   projectId: process.env.VIZCOM_FIREBASE_PROJECT_ID,
   storageBucket: process.env.VIZCOM_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.VIZCOM_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.VIZCOM_FIREBASE_APP_ID
 };
 
 const app =  firebase.initializeApp(config);

 export const auth = app.auth();

 export default app;