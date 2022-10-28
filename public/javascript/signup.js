

async function signupFormHandler(event) {
    event.preventDefault();

    // retrieving values from user sign-up
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const avatar = document.querySelector('#avatar-selector').value;
    const language = document.querySelector('#language-selector').value


    console.log("username", username);
    console.log("password", password);
    console.log("avatar", avatar);
    console.log("language", language);
    
    // fetch to post new user to database 
    if (username && password && language && avatar) {
      const response =  await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password,
                language,
                avatar
            }),
            headers: { 'Content-Type': 'application/json' }
        })
       
        // check the response status, error handling 
        if (response.ok) {
            document.location.replace('/login')
            console.log('Successfully added new user!')
        } else {
            alert(response.statusText);
        }
    }
}

// call signup form and add event listent to signup button
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);