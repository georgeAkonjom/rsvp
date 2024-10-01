// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA1eY1pFhoJFfk0Kyg9rGhnFc17A1BU0qY",
	authDomain: "faithsnorteysrsvp.firebaseapp.com",
	databaseURL:
		"https://faithsnorteysrsvp-default-rtdb.firebaseio.com",
	projectId: "faithsnorteysrsvp",
	storageBucket: "faithsnorteysrsvp.appspot.com",
	messagingSenderId: "443423571413",
	appId: "1:443423571413:web:7fb61eba6ff71917d7515c",
	measurementId: "G-6G88WKXG34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
