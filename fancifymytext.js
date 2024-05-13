function bigger() {
    document.getElementById("inputText").style.fontSize = "24pt";
}

function applyFanciness() {
    let inputText = document.getElementById("inputText");
    let fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        inputText.style.fontWeight = "bold";
        inputText.style.color = "blue";
        inputText.style.textDecoration ="underline";
    }
    else {
        inputText.style.fontWeight = "normal";
        inputText.style.color = "black";
        inputText.style.textDecoration = "none";
    }
}

function moo() {
    let inputText = document.getElementById("inputText");
    let text = inputText.value;
    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].split(" ");
        let lastWord = words[words.length - 1];

        words[words.length - 1] = lastWord + "-Moo";
        sentences[i] = words.join(" ").toUpperCase();
    }
    
    inputText.value = sentences.join(".");
}