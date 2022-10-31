const translate  = require('translate-google')

// function takes two parameters. Text = string, obj, or array. Lang = default language of user profile
function translateText (text, lang) {

    translate( text  , {to: lang}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
 
}

module.exports = translateText;