// const translate = require('translate-google')

// function translateText (text, lang) {

//     translate( text  , {to: lang}).then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.error(err)
//     })
 
// }
// async function translator (event) {
//     const text = document.querySelector("#post-title")
//     console.log(text)
//     console.log("Translated")



// };



// const title = querySelect 
// const title1 = "hello world"
// const title2 = "Hola mundo"

// translateText(title, "en")
//     console.log(translateText);

// translateText(text, 'es')

document.querySelectorAll(`[id^="translate-link-"]`).forEach(button => {
    console.log(button)
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      console.log(event);
    
    const id = event.currentTarget.getAttribute("data-post-id")
      console.log(id);

      const response = await fetch(`/api/posts/${id}`, {
        method: 'GET'
      });
    
      if (response.ok) {
        console.log(response.title)
        console.log(response.copy)
        document.location.reload('');
      } else {
        alert(response.statusText);
      }


    });
  });