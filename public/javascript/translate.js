var translator = require("../../models/Translate")


// async function translator (event) {
//     const text = document.querySelector("#post-title")
//     console.log(text)
//     console.log("Translated")

// };

// const title = document.querySelector(`[id^="post-title-"]`).textContent
// const text = document.querySelector(`[id^="content-text-"]`).textContent


const title1 = "hello world"
const tittle2 = "Hola mundo"

translator([title1, tittle2], "es")


// function translateText (text, lang) {

//     translate( text  , {to: lang}).then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.error(err)
//     })
 
// }
// translateText(title1, "es")
// translateText(title2, "es")

// document.querySelectorAll(`[id^="translate-link-"]`).forEach(button => {
//     console.log(button)
//     button.addEventListener('click', async (event) => {
//       event.preventDefault();
//       console.log(event);
    
//     //   const id = event.currentTarget.getElementById("#content-text")
    //   console.log(id);
//     });
// });