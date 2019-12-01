import getCharacters from './getCharacters';

function appendData(data) {
    const mainContainer = document.getElementById("data");
    for (var i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        div.classList.add("character");
        mainContainer.appendChild(div);
        div.innerHTML = '<h5 class="name">' + data[i].name + '</h5>' + '<p class="house"> House: ' + data[i].house + '</p>' + '<p class="school"> School: ' + data[i].school + '</p>' + '<p class="wand"> Wand: ' + data[i].wand + '</p>'
    }
}

function generateShortCharacterView(character) {
    getCharacters(character)
        .then(function (data) {
            appendData(data);
        });
}

//example
//generateShortCharacterView({name:"Harry Potter"})
