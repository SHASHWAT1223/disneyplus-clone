import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIt54m_xeKYDbVzM5tnFQGW5bat0Qe6Ik",
    authDomain: "disneyplus-clone-0225.firebaseapp.com",
    projectId: "disneyplus-clone-0225",
    storageBucket: "disneyplus-clone-0225.appspot.com",
    messagingSenderId: "515365324874",
    appId: "1:515365324874:web:969e0c5a1d8a95f866beb3",
    measurementId: "G-WBLP0TCHQE"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage  = getStorage(firebaseApp);

  export {auth, provider, storage};
  export default db;