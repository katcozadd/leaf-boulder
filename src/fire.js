import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyBI8uIa9YXJK2OLH3fjadjnzFalfUR9pGE",
    authDomain: "leaf-vegetarian-restaurant.firebaseapp.com",
    databaseURL: "https://leaf-vegetarian-restaurant.firebaseio.com",
    projectId: "leaf-vegetarian-restaurant",
    storageBucket: "leaf-vegetarian-restaurant.appspot.com",
    messagingSenderId: "821181775768"
  };

  let fire = firebase.initializeApp(config);

  export default fire
