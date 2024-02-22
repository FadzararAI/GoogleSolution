import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBe3BePIVIhEiEizhSfJF2c1H8nvMVKudY",
    authDomain: "urban-green-nest.firebaseapp.com",
    projectId: "urban-green-nest",
    storageBucket: "urban-green-nest.appspot.com",
    messagingSenderId: "713388708636",
    appId: "1:713388708636:web:48db887c206acd84fde0d9"
};

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

export default firestore;
