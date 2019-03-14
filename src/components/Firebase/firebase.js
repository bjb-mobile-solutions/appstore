import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBgY1RyA6LZgQa2j7jBSLaRWF7YdXdWTlw",
    authDomain: "jb-internal-app-store.firebaseapp.com",
    databaseURL: "https://jb-internal-app-store.firebaseio.com",
    projectId: "jb-internal-app-store",
    storageBucket: "jb-internal-app-store.appspot.com",
    messagingSenderId: "376689459481"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // *** Auth API ***

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}

export default Firebase;