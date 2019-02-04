import * as firebase from 'firebase';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyD9AtuHI_zqeW3L2s-mTvc-J-281_dpAKw",
    authDomain: "jbtestlab.firebaseapp.com",
    databaseURL: "https://jbtestlab.firebaseio.com",
    projectId: "jbtestlab",
    storageBucket: "jbtestlab.appspot.com",
    messagingSenderId: "242278540925"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;