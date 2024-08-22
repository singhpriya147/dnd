// apiKey: "AIzaSyB9ne7_eX2e4SeaMfvy2KLv0VaQk7VoJck",

//   authDomain: "dndlayout.firebaseapp.com",

//   projectId: "dndlayout",

//   storageBucket: "dndlayout.appspot.com",

//   messagingSenderId: "91676585785",

//   appId: "1:91676585785:web:94b4e2294a71ee34e302e8"


// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
