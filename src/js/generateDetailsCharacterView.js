import getCharacters from './getCharacters';

function appendData(data) {
        if (data) {
            const div = document.createElement("div");
            div.classList.add("character");
            Object.keys(data).map(key => {
            if(key !== '_id' && key !== '__v'){
                div.innerHTML += `<p><h5>${key}: ${data[key]} </h5></p>`;
            	}
        	})
        return div;
        }
    return null;
    }

function generateDetailsCharacterView(character) {
    var p = new Promise((resolve, reject) => {
        getCharacters(character).then((data) => {
            resolve(appendData(data[0]));
        })
    })
    return p;
}

export default generateDetailsCharacterView;

//example
//generateDetailsCharacterView({name:"Harry Potter"})
