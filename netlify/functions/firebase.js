const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyC_v4zvzONVucQkbUB_7EDaRYfYkEwi6fk",
  authDomain: "kiei-451-869e3.firebaseapp.com",
  projectId: "kiei-451-869e3",
  storageBucket: "kiei-451-869e3.appspot.com",
  messagingSenderId: "355009077528",
  appId: "1:355009077528:web:e8f04aa75b9729667afe6d"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase