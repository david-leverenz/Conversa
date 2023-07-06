// This collects the user name and password then calls the login api.  If the login is successful that chat route is used.  The button at the bottom of the code launches the event.

const loginFormHandler = async (event) => {
    event.preventDefault();


    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (username && password) {

        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
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
    .addEventListener('click', loginFormHandler);