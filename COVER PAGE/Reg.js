function register() {
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username && password) {
    
    alert("Registration successful!");
  } else {
    alert("Username and password are required.");
  }
}