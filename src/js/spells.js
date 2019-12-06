import getSpells from "./getSpells";

const data = document.getElementById('data');

getSpells().then(array => {
    array.forEach(element => {
        for(const [k, v] of Object.entries(element)) {
            data.innerHTML += `<p>${k}: ${v}</p>`;
        }
    });
})