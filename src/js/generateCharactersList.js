import generateShortCharacterView from './generateShortCharacterView';
// function returns unordered list with characters from charactersList
function generateCharactersList(charactersList) {


    const p = new Promise((resolve, reject) => {
        const ul = document.createElement('ul');
        charactersList.forEach(element => {
            const li = document.createElement('li');
            generateShortCharacterView(element)
                .then(result => {
                    li.appendChild(result);
                    ul.appendChild(li);
                })
                .catch(err => {
                    console.error(err);
                });
        })
        resolve(ul);
    });

    return p;
}

export default generateCharactersList;

//example
//generateCharactersList([{name: "Harry Potter"}, {name: "Ludo Bagman"}]).then(ul => document.body = ul);