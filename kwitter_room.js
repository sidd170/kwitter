var firebaseConfig = {
      apiKey: "AIzaSyC6Py-nsLNEdjZPi6tw7j2Mtr4t7X4Ocb8",
      authDomain: "kwitter-f727e.firebaseapp.com",
      databaseURL: "https://kwitter-f727e-default-rtdb.firebaseio.com",
      projectId: "kwitter-f727e",
      storageBucket: "kwitter-f727e.appspot.com",
      messagingSenderId: "683504760283",
      appId: "1:683504760283:web:dd607dd35bb4bbcf4d23fe"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Salut!!! " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
});
});
}
getData();
function redirecttoroomname(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
      window.location = "index.html";
}
