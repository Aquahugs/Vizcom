import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SET_USER,
} from "../constants/action-types";

//Sign-in function
export const signIn = (credentials) => {
  console.log(credentials);
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
};

//Sign-out function
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};

//Sign-Up function
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    console.log(firebase);
    console.log(firestore);
    console.log(signUp);

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)

      .then((resp) => {
        console.log(resp);
        fetch(
          `https://designerspendroplet.getdpsvapi.com/adduser?uuid=${resp.user.uid}&username=${resp.user.displayName}&photourl=''&bio=''&email=${resp.user.email}`
        );
        return firestore.collection("users").doc(resp.user.uid).set({
          // logging the parameters into the firebase users collection
          displayName: newUser.displayName,
          email: newUser.email,
          uid: resp.user.uid,
        });
      })

      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: SIGNUP_ERROR, err });
      });
  };
};
