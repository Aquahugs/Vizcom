import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCjKENzxdzGbpNEO7lpZ6ct5v2SDt6jy_8",
    authDomain: "designerspen2.firebaseapp.com",
    databaseURL: "https://designerspen2.firebaseio.com",
    projectId: "designerspen2",
    storageBucket: "designerspen2.appspot.com",
    messagingSenderId: "791462166450",
    appId: "1:791462166450:web:5958db2f739e13ced52eab"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    // /* Firebase APIs */

    this.auth = app.auth();

    // /* Social Sign In Method Provider */
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  // doPasswordUpdate = (password) =>
  //   this.auth.currentUser.updatePassword(password);

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        authUser = {
          uid: authUser.uid,
          email: authUser.email,
          emailVerified: authUser.emailVerified,
          providerData: authUser.providerData,
        };
        next(authUser);
      } else {
        fallback();
      }
    });

  user = (uid) => this.db.collection("users").doc(uid);
}

export default Firebase;
