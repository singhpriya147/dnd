
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
  apiKey: 'AIzaSyB9ne7_eX2e4SeaMfvy2KLv0VaQk7VoJck',
  authDomain: 'dndlayout.firebaseapp.com',
  projectId: 'dndlayout',
  storageBucket: 'dndlayout.appspot.com',
  messagingSenderId: '91676585785',
  appId: '1:91676585785:web:94b4e2294a71ee34e302e8',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
