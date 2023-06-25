//your JS code here. If required.
 // Check if there are saved login details
    var savedUsername = localStorage.getItem('username');
    var savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
      var loginButton = document.createElement('button');
      loginButton.setAttribute('id', 'existing');
      loginButton.textContent = 'Login as existing user';
      loginButton.addEventListener('click', function() {
        alert('Logged in as ' + savedUsername);
      });
      document.body.appendChild(loginButton);
    }

 // Handle form submission
    var loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var rememberMe = document.getElementById('checkbox').checked;

      if (rememberMe) {
        // Save login details to local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        // Remove login details from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      alert('Logged in as ' + username);
    });