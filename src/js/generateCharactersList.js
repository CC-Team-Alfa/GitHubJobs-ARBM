//generuje listę postaci przy pomocy funkcji generateShortCharactersViews
function generateCharactersList(charactersList){
  characterList.forEach((character)=>{
    generateCharactersList(character);
  })
}
// Tworzy strukturę w HTML 
function generateShortCharactersView(character){
  let container = document.getElementsByClassName('container')[0]; //Do jakiego elementu sie odwołuje ?
  let p = document.createElement('p'); // tworzy element 
  p.innerText = character; // wpisuje tekst
  container.appendChild(p); // tworzy dziecko p 
}

