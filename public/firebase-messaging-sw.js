// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// eslint-disable-next-line no-undef
firebase.initializeApp({
  apiKey: "AIzaSyAlqGh0CNkhgZx3p9bBL1J0oUexQrl8H4o",
  authDomain: "contactsapp-b53fd.firebaseapp.com",
  projectId: "contactsapp-b53fd",
  storageBucket: "contactsapp-b53fd.appspot.com",
  messagingSenderId: "108583192415",
  appId: "1:108583192415:web:9b4e1defcb956c9b4718ea",
  measurementId: "G-YMV7Y519DR",
});
// eslint-disable-next-line no-undef
// const isSupported = firebase.messaging.isSupported();
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();
messaging.onBackgroundMessage(({ notification: { title, body } }) => {
  console.log(body, title);
  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(title, {
    body,
    //   icon: image,
  });
});

