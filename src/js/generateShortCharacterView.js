import getCharacters from './getCharacters';

function appendData(data) {
    if (data) {
        const div = document.createElement("div");

        div.classList.add("character");

        div.innerHTML = '<h5 class="name">';
        div.innerHTML += data.name ? data.name : 'Lack of information.';
        div.innerHTML += '</h5>\n<p class="house">House: ';
        div.innerHTML += data.house ? data.house : 'Lack of information.';
        div.innerHTML += '</p>\n<p class="school">School: ';
        div.innerHTML += data.school ? data.school : 'Lack of information.';
        div.innerHTML += '</p>\n<p class="wand">Wand: ';
        div.innerHTML += data.wand ? data.wand : 'Lack of information';
        div.innerHTML += '</p>\n';
        return div;
    }
    return null;
}

function generateShortCharacterView(character) {
    var p = new Promise((resolve, reject) => {
        getCharacters(character).then((data) => {
            resolve(appendData(data[0]));
        })
    })
    return p;
}

export default generateShortCharacterView;

//example
//generateShortCharacterView({name:"Harry Potter"})
