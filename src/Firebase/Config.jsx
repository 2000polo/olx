import Firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBXZLFQolpPWsr8U4O-xpckR91l1pn6gBk",
    authDomain: "olx-clone-1230b.firebaseapp.com",
    projectId: "olx-clone-1230b",
    storageBucket: "olx-clone-1230b.appspot.com",
    messagingSenderId: "664213077127",
    appId: "1:664213077127:web:d173cb9b43291d659ecc22",
    measurementId: "G-ZHXSHY3G11"
  };

export default Firebase.initializeApp(firebaseConfig);