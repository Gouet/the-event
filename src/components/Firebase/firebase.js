import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCDU5hZsr2umVz8UMAzrwq6KUyhWRtg6o0",
    authDomain: "outprojectdev.firebaseapp.com",
    databaseURL: "https://outprojectdev.firebaseio.com",
    projectId: "outprojectdev",
    storageBucket: "outprojectdev.appspot.com",
    messagingSenderId: "584695216902",
    appId: "1:584695216902:web:1ff492cb8cafdc7beabc87",
    measurementId: "G-XNZLGJL71B"
  };


  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  }
  
  export default Firebase;