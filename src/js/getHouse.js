// function returns Object of house with specified id
function getHouse(id) {
    var url = `https://www.potterapi.com/v1/houses/${id}?key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm`;
    return fetch(url)
    .then(response => response.json())
    .then(response => response[0]);
}

export default getHouse;

// example
// getHouse('5a05da69d45bd0a11bd5e06f').then(res => console.log(res))