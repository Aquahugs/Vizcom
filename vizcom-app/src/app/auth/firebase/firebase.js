import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
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
