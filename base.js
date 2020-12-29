import Rebase from "re-base"; 
import firebase from "firebase"; 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB2Ql1tM4C3v_CCphAYYYJSiLeckydqK2o",
    authDomain: "catch-of-the-day-maartje-2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-maartje-2.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export 
export { firebaseApp };

// This is a default export 
export default base;
