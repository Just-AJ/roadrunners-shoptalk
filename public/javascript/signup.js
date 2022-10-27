

async function signupFormHandler(event) {
    event.preventDefault();

    // retrieving values from user sign-up
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const avatar = document.getElementById('#avatar-selector')
    const language = document.getElementById('#language-selector')
    var avValue = avatar.value;
    var lanValue = language.value;

    console.log("username", username);
    console.log("password", password);
    console.log("avatar", avValue);
    console.log("language", lanValue);
    
    // fetch to post new user to database 
    if (username && password) {
      const response =  await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password,
                lanValue,
                avValue
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