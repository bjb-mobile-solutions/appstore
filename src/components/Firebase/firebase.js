import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// const FieldValue = require('firebase-admin').firestore.FieldValue;

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

        // this.serverValue = app.database.ServerValue;

        this.auth = app.auth();

        this.db = app.firestore();

    }


    // *** Auth API ***

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    apps = () => this.db.collection("apps");

    app = (appName) => this.db.collection("apps").where("appName", "==", appName);

    appId = (id) => this.db.collection("apps").doc(id);

    addApp = (appItem) => {
        return this.app(appItem.name).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                return this.appId(doc.id).update({
                    apps: app.firestore.FieldValue.arrayUnion(appItem)
                })
            })
        });
    };

}

export default Firebase;