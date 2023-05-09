let dictionary = [];

function addWord() {
    let word = document.getElementById("word").value;
    
    dictionary.push(word);
    document.getElementById("word").value = "";
}

function searchWord() {
    let search = document.getElementById("search");
    let message = document.getElementById("message");
    
    message.innerText = "";
    
    if (dictionary.includes(search.value)) {
        message.innerText = "The word is in the dictionary!";
    } else {
        message.innerText = "The word is not in the dictionary!";
    }

    document.getElementById("search").value = "";
}