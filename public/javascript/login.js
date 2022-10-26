async function loginFormHandler(event) {
    event.preventDefault();

    // retrieving values from user sign-up
    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();
    console.log("username", username);
    console.log("password", password);
    // console.log(language)
    
    // fetch to post new user to database 
    if (username && password) {
      const response =  await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password,
            }),
            headers: { 'Content-Type': 'application/json' }
        })
    
        // check the response status, error handling 
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
}




// call signup form and add event listent to signup button
const loginBtn = document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
console.log("button clicked", loginBtn);