const translate = require('translate-google')


// console.log(template({ name: "Paul" }));

// var titleScreen = "Around the world"

// translateText(titleScreen, 'fr')

Handlebars.registerHelper("translator", function (string) {
    console.log(string.translateText());
    return string.translateText();
})


// function takes two parameters. Text = string, obj, or array. Lang = default language of user profile
async function translateText(text, lang) {
    const text = document.querySelector('#post-text').value;
    const lang = await fetch(`/api/users/lang/${id}`, {
        method: 'GET'
    });
    console.log(text, lang);

    translate(text, { to: lang }).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })

}

document.querySelector('#translateButton').addEventListener('click', translateText)

// few testing options below. 
// var obText = {
//     firstText: 'Hello World',
//     secondText: 'I see you',
//     thirdText: 'can you see me?',
//     fourthText: 'I hope you can'
// }

// var obTest = [obText.firstText, obText.thirdText]

// const obJoin = obTest.join()


// module.export = document.querySelector('#translateButton').addEventListener('click', translateText)