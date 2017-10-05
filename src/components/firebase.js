import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDN14it6FJtzdqQBb_PHCKXXk0dAqAYTqM",
    authDomain: "quicknoms-91e39.firebaseapp.com",
    databaseURL: "https://quicknoms-91e39.firebaseio.com",
    projectId: "quicknoms-91e39",
    storageBucket: "quicknoms-91e39.appspot.com",
    messagingSenderId: "631928188702"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
