import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDswYNKS6L3N6ennPpk88OrtQdPzpbUMDU",
  authDomain: "you-tube-am.firebaseapp.com",
  projectId: "you-tube-am",
  storageBucket: "you-tube-am.appspot.com",
  messagingSenderId: "1019211096951",
  appId: "1:1019211096951:web:eac5a776f4f7f8fd5ab772",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();