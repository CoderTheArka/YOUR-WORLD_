const firebaseConfig = {
    apiKey: "AIzaSyBQ7uPLr9i23Vva0yBzz3YQ4cgIywRRNmA",
    authDomain: "registration-310c5.firebaseapp.com",
    databaseURL: "https://registration-310c5-default-rtdb.firebaseio.com",
    projectId: "registration-310c5",
    storageBucket: "registration-310c5.appspot.com",
    messagingSenderId: "98589376762",
    appId: "1:98589376762:web:a8eab52be264c69c020943"
  };
  
  firebase.initializeApp(firebaseConfig);

  window.oncontextmenu=function(){
    alert('Right Click Is Disable');
    return false;
}
var username = localStorage.getItem('username');

function getData() {firebase.database().ref('Searched/' + username).on('value', function(snapshot) {document.getElementById("gg").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  
 //Start code
 console.log("USERS - "+ Room_names);
 localStorage.setItem('Names', Room_names);
 row = "<div class='dfg' id='"+Room_names+"' onclick='RedirecttoRoomName(this.id)'><div id='bhbh' class='image'><img id='srcgg'></div><div id='"+Room_names+"1"+"' class='text' ><p id='emailofother'>"+Room_names+"</p><p id='emailofother1' class='ff'></p></div></div><hr id='"+Room_names+"2"+"'>";

 document.getElementById("gg").innerHTML += row;
//End code
 });});}
getData();

function RedirecttoRoomName(name){
alert(name);
localStorage.setItem('User' , name);
window.location = "room.html"

}
function ffs(){
  if(document.getElementsByClassName('text').value == localStorage.getItem('username').innerHTML){
   document.getElementById(localStorage.getItem('username') +"1").style.display = 'none';
   document.getElementById(localStorage.getItem('username') +"2").style.display = 'none';
  }else if(  document.getElementById(localStorage.getItem('username') +"2").style.display == 'none'){
   return false;
  }
}

function logout(){
  localStorage.removeItem('dd');
  localStorage.removeItem('Names');
  localStorage.removeItem('login_username');
  localStorage.removeItem('login_email');
  localStorage.removeItem('name');
  localStorage.removeItem('OPT55551');
  localStorage.removeItem('loglevel');
  localStorage.removeItem('pcc');
  localStorage.removeItem('ROOM_NAME');
  localStorage.removeItem('User');
  localStorage.removeItem('GROUP_ROOM_NAME');
  localStorage.removeItem('new_email');
  localStorage.removeItem('OTP1');
  localStorage.removeItem('forgot_email');
  localStorage.removeItem('OTP');
  localStorage.removeItem('ROOM_NAME');
  localStorage.removeItem('username');
  localStorage.removeItem('picture');
  localStorage.removeItem('email');
  localStorage.removeItem('ext');
  localStorage.removeItem('login_password');

  window.location = 'index.html';
}
function back(){
  window.location = 'main.html';
}