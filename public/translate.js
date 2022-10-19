const translate = require('translate-google')

function translateText (text, lang) {

    // spanish
    if ( lang === 'es') {
    translate( text  , {to: 'es'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
    // Czech
} else if ( lang === 'cs') {
    translate( text  , {to: 'cs'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
} 
    // French
else if ( lang === 'fr') {
    translate( text  , {to: 'fr'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Hindi
else if ( lang === 'hi') {
    translate( text  , {to: 'hi'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Japanese
else if ( lang === 'ja') {
    translate( text  , {to: 'ja'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Arabic
else if ( lang === 'ar') {
    translate( text  , {to: 'ar'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Russian
else if ( lang === 'ru') {
    translate( text  , {to: 'ru'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Chinese Simplified
else if ( lang === 'zh-cn') {
    translate( text  , {to: 'zh-cn'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Chinese Traditional
else if ( lang === 'zh-tw') {
    translate( text  , {to: 'jzh-tw'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Bengali
else if ( lang === 'bn') {
    translate( text  , {to: 'bn'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Portuguese
else if ( lang === 'pt') {
    translate( text  , {to: 'ja'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Indonesian
else if ( lang === 'id') {
    translate( text  , {to: 'id'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Urdu
else if ( lang === 'ur') {
    translate( text  , {to: 'ur'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // German
else if ( lang === 'de') {
    translate( text  , {to: 'de'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // punjabi
else if ( lang === 'ma') {
    translate( text  , {to: 'ma'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // turkish
else if ( lang === 'tr') {
    translate( text  , {to: 'tr'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Korean
else if ( lang === 'ko') {
    translate( text  , {to: 'ko'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Telugu
else if ( lang === 'te') {
    translate( text  , {to: 'te'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Swedish
else if ( lang === 'sv') {
    translate( text  , {to: 'sv'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Vietnamese
else if ( lang === 'vi') {
    translate( text  , {to: 'vi'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Thai
else if ( lang === 'th') {
    translate( text  , {to: 'th'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Italian
else if ( lang === 'it') {
    translate( text  , {to: 'it'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}
    // Greek
else if ( lang === 'el') {
    translate( text  , {to: 'el'}).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}else     
translate( text  , {to: 'en'}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})

}

var obText = {
    firstText: 'Hello World',
    secondText: 'I see you',
    thirdText: 'can you see me?',
    fourthText: 'I hope you can'
}

var obTest = [obText.firstText, obText.thirdText]

const obJoin = obTest.join()

translateText ( obJoin, 'es')

module.export = translateText();