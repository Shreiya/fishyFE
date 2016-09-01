import firebase from 'firebase';
import { browserHistory } from 'react-router';

// const url = "http://localhost:3000/" // local mode
// const url = "https://peaceful-headland-12692.herokuapp.com/" // deployment mode
// const FIREBASE_API_KEY = fetch(url).then( res => {
//   console.log(res.json())
//   return res.json()
// }).then( (json) => {
//   return json
// })

var config = {
  apiKey: "AIzaSyBtzKnVEZEw9VPZBT3diEMP2hsIRFq6GEk",
  authDomain: "feedingfishy.firebaseapp.com",
  databaseURL: "https://feedingfishy.firebaseio.com",
  storageBucket: "feedingfishy.appspot.com",
};
firebase.initializeApp(config);

const createUser = {
  signUp: (email, pass, data) => {
    console.log("signing up...", email, pass);
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(err => {
      if (err) {
        console.error(err.code, err.message)
      }
    }).then(res => {
      console.log("helper",res);
      firebase.database().ref("users/"+res.uid).set({
        uid: res.uid,
        displayName: data.userName
      })
      window.localStorage.setItem("uid", res.uid);
      console.info(window.localStorage.getItem("uid"));
      window.localStorage.setItem("displayName", data.userName);
      window.localStorage.setItem("fishyName", data.fishName);
      console.info(window.localStorage.getItem("displayName"));
      console.info(window.localStorage.getItem("fishyName"));


      }
    )
  },

  logIn: (email, pass) => {
    console.log("loggging in...", email, pass);
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(err => {
      // Handle Errors here.
      if (err) {

        console.error(err.code, err.message)
      }
    }).then(res => {
      console.log("logged in...", res);
      window.localStorage.setItem("uid", res.uid);
      console.info(window.localStorage.getItem("uid"));
      }
    )
  },

  checkUser: function (uid) {
    firebase.auth().onAuthStateChanged(function(uid) {
    if (uid) {
      return true
      // User is signed in.
    } else {
      alert("Youre not in!")
      const path = `/log-in`
      return browserHistory.push(path)
      // No user is signed in.
    }
    });
  },

  signOut: function() {
    firebase.auth().signOut().then(function() {
      console.log("logged out?");
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });
  }
}



export default createUser;
