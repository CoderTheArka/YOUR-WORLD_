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

 function send(){
    if(document.getElementById('message').value != ''){
        var room_name = localStorage.getItem('ROOM_NAME');
    
        firebase.database().ref("/").child("ROOM" + '/' + room_name).update({
        purpose : "adding room name"
    
        
    
        });
    
        
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var dateTime = date;
        msg = document.getElementById('message').value ;
        firebase.database().ref("ROOM" + '/' + room_name).push({
              name:localStorage.getItem('username'),
              message:msg,
              time:dateTime
    
    
    
        });
    document.getElementById('messag').innerHTML = "";
    
    }else{
        alert('YOUR ARE NOT ALLOW TO SEND EMPTY MESSAGE');
        document.getElementById('messag').innerHTML = "";
    }
  }

  
  var room_name = localStorage.getItem('ROOM_NAME');
  function getData() { firebase.database().ref("ROOM" + '/' + room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    var firebase_message_id = childKey;
    var message_data = childData;


//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
time = message_data['time'];
pic =   localStorage.getItem('picture')
if (name1 == localStorage.getItem('username')){
    create_message_sender = "<div class='outgoing_msg'><div class='sent_msg'><p>"+message+"</p><span class='time_date'>"+time+"</span></div></div>";
    document.getElementById("output").innerHTML += create_message_sender;
}else if (name1 == localStorage.getItem('User')){
    create_message_reciver = "<div class='incoming_msg'><div class='incoming_msg_img'> <img id='dede' src='"+pic+"'> </div><div class='received_msg'><div class='received_withd_msg'><p>"+message+"</p><span class='time_date'>"+time+"</span></div></div></div>"
    document.getElementById("output").innerHTML += create_message_reciver;
}else{
}


//End code
 } });  }); }
 getData();


 
 
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