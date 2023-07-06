const signupFormHandler = async (event) => {
    event.preventDefault();

    // requiring values from backend to create new user data
    const username = document.querySelector('#usernameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();

    if (username && email && password) { //if data works, finish backend post method
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) { //once signed up, rerouting to the login page to test new user data
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document // compeleting event function
    .querySelector('#signupBtn')
    .addEventListener('click', signupFormHandler);