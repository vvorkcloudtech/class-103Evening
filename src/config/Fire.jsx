import firebase from 'firebase';


  var config = {
    apiKey: "AIzaSyApJK5YLQQqtLIzR27dnrvL-yc1vLIl9n4",
    authDomain: "my-group-project-dd419.firebaseapp.com",
    databaseURL: "https://my-group-project-dd419.firebaseio.com",
    projectId: "my-group-project-dd419",
    storageBucket: "my-group-project-dd419.appspot.com",
    messagingSenderId: "50799375812"
  };
  var config = firebase.initializeApp(config);

  export default config;
