// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE,
	authDomain: 'quillsnap-422a3.firebaseapp.com',
	projectId: 'quillsnap-422a3',
	storageBucket: 'quillsnap-422a3.appspot.com',
	messagingSenderId: '543001393185',
	appId: '1:543001393185:web:71ac21323e275cbb8d4b60',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
