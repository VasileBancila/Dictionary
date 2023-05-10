let dictionary = [];

function addWord() {
    let word = document.getElementById("word").value;    
    dictionary.push(word);
    document.getElementById("word").value = "";
}

function searchWord() {
    let search = document.getElementById("search");
    if (dictionary.includes(search.value)) {
        messageDisplay("yes");
    } else {
        messageDisplay("not")
    }
    document.getElementById("search").value = "";
}

function messageDisplay(status) {
    let message = document.getElementById("message");
    message.innerText = "";
    if (status === "yes") {
        message.innerText = "The word is in the dictionary!";
    } else {
        message.innerText = "The word is not in the dictionary!";
    }
}