import getSpells from "./getSpells";

const data = document.getElementById('data');

getSpells().then(array => {
    array.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('spells');
        for(const [k, v] of Object.entries(element)) {
            if (k !== '_id' && k != '__v')
                div.innerHTML += `<p class="${k}">${k}: ${v}</p>`;
        }
        div.innerHTML += "<br>";
        document.getElementById('data').appendChild(div);
    });
})