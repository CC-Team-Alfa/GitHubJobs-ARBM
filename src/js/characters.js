import getCharacters from "./getCharacters";
import generateCharactersList from "./generateCharactersList";

const data = document.getElementById('data');

getCharacters()
    .then(array => generateCharactersList(array))
    .then(list => data.appendChild(list))
    .catch(err => console.error(err));