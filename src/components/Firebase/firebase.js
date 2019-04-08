import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const FieldValue = require('firebase-admin').firestore.FieldValue;

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

    addApp = (appItem) => {
        this.app(appItem.name).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.id);
                doc.id.update({
                    apps: FieldValue.arrayUnion(appItem)
                })
                    // .then(function () {
                    //     // console.log("Document written with ID: ", docRef.id);
                    //     alert('Successfully saved: ' + name);
                    // })
                    .catch(function (error) {
                        console.log(error);
                        alert(error);
                        // this.setState({ error });
                    });
            })
        })
            .catch(function (error) {
                console.log(error);
                alert(error);
                // this.setState({ error });
            })
            ;

    };

}

export default Firebase;