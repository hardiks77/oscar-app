import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCsmDel6jVzi1fm1HjBhyzb6Qlc76BcCiI",
    authDomain: "oscar-app-a681f.firebaseapp.com",
    projectId: "oscar-app-a681f",
    storageBucket: "oscar-app-a681f.appspot.com",
    messagingSenderId: "230755160406",
    appId: "1:230755160406:web:f45685c9be61b84cbf06f7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;