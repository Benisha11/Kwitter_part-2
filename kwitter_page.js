//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyADtCKROgRj8sUvw1NND9vzEO1_gHwtRyE",
    authDomain: "kwitter-f546b.firebaseapp.com",
    databaseURL: "https://kwitter-f546b.firebaseio.com",
    projectId: "kwitter-f546b",
    storageBucket: "kwitter-f546b.appspot.com",
    messagingSenderId: "774768451832",
    appId: "1:774768451832:web:357dd3bfa45d419c135b0d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");  

  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name , 
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();