import firebase from 'firebase/app';
import 'firebase/database';
import Rebase from 're-base';
import 'firebase/auth';

// Initialize firebase
const config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR DOMAIN",
    databaseURL: "YOUR URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGE BUCKET",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
};

const app = firebase.initializeApp(config);

// Configure authentication
const googleProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

// Configure database
const db = firebase.database(app);
const base = Rebase.createClass(db);

export { app, base, auth, googleProvider };