// var userName;

const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log(event);
    console.log("login .js");

    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (username && password) {

        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // userName = username;
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#loginBtn')
    .addEventListener('click', loginFormHandler);