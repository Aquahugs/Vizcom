import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

    // this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    // /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.firestore();

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

  // // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // this.user(authUser.uid)
        this.db
          .collection("users")
          .doc(authUser.uid)
          .get()
          .then((snapshot) => {
            if (snapshot.exists) {
              // Convert to City object
              const dbUser = snapshot.data();
              // Use a City instance method
              console.log(dbUser.toString());
              authUser = {
                uid: authUser.uid,
                email: authUser.email,
                emailVerified: authUser.emailVerified,
                providerData: authUser.providerData,
                ...dbUser,
              };
              next(authUser);
            } else {
              console.log("No such document!");
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
      } else {
        fallback();
      }
    });

  user = (uid) => this.db.collection("users").doc(uid);
}

export default Firebase;
