function validateLogin(event) {
  event.preventDefault(); 

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

 
  if (username === "admin" && password === "password") {
    window.location.href = "home.html"; 
  } else {
    var errorMsg = document.getElementById("error-msg");
    errorMsg.textContent = "Wrong Username or Password"; 
  }
}