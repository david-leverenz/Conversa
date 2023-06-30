const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#usernameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/chat');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#loginBtn')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('#signupBtn')
    .addEventListener('submit', signupFormHandler);