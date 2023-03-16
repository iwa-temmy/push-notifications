import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// import { getMessaging } from "firebase/messaging/sw";

// const firebaseConfig = {
//   apiKey: "AIzaSyAoUi1NdbG1NSGnwIcCjhnAm2N4N4TpDNc",
//   authDomain: "iqsa-71b45.firebaseapp.com",
//   projectId: "iqsa-71b45",
//   storageBucket: "iqsa-71b45.appspot.com",
//   messagingSenderId: "784879192207",
//   appId: "1:784879192207:web:4be6e7ace1b0cb95a388fa",
//   measurementId: "G-8Z03W6QVBP",
// };

// const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlqGh0CNkhgZx3p9bBL1J0oUexQrl8H4o",
  authDomain: "contactsapp-b53fd.firebaseapp.com",
  projectId: "contactsapp-b53fd",
  storageBucket: "contactsapp-b53fd.appspot.com",
  messagingSenderId: "108583192415",
  appId: "1:108583192415:web:9b4e1defcb956c9b4718ea",
  measurementId: "G-YMV7Y519DR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
