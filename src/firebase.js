import firebase from "firebase";
const config = {
    apiKey: "AIzaSyCEs2YGKYKDVOl2y500M0Nbpm9LQlbPuEM",
    authDomain: "ownproject-eb44c.firebaseapp.com",
    databaseURL: "https://ownproject-eb44c.firebaseio.com/"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();