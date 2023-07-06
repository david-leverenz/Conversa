//creating logout functionality for app
const logout = async () => {
    const response = await fetch('/api/logout', { //logout route to backend
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/'); //if user presses button the reroute page to login page
    } else {
      alert(response.statusText);
    }
  };
  
  document //completeing the event function
  .querySelector('#logoutBtn')
  .addEventListener('click', logout);