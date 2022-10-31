async function translator (event) {
    const text = document.querySelector("#post-title")
    console.log(text)
    console.log("Translated")

};

document.querySelector('#translateButton').addEventListener('submit', translator());
