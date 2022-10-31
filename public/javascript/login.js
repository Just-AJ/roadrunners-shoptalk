async function loginFormHandler(event) {
    event.preventDefault();
    console.log(event)

    // retrieving values from user sign-up
    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();
    const avatar = document.querySelector('#avatar-selector');
    const language = document.querySelector('#language-selector');

    console.log("username", username);
    console.log("password", password);
    console.log("avatar", avatar);
    console.log("language", language);
    
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
        } else if( avatar && language){
        const res = await fetch(`/api/users/${id}`, {
            method: 'get',

        })
        if (res.ok) {
            document.location.replace('/')
        } else {
            alert(res.statusText);
        } 
    }
}




// call signup form and add event listent to signup button
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
// console.log('login file now loaded');