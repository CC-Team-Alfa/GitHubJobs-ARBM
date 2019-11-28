import generateCharacterEndpoint from './generateCharacterEndpoint';
// function returns array of characters with specified parameters
function getCharacters(parameters) {
    return fetch(generateCharacterEndpoint(parameters))
    .then(response => response.json())
}
// example
// getCharacters({house:'Gryffindor'}).then(array => console.log(array))
export default getCharacters;