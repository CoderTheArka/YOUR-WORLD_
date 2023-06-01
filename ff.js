function fun(){
    event.preventDefault();
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
  window.oncontextmenu=function(){
    alert('Right Click Is Disable');
    return false;
}