import getHogwartHouses from "./getHogwartHouses";

const data = document.getElementById('data');

getHogwartHouses().then(array => {
    array.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('houses');
        for(const [k, v] of Object.entries(element)) {
            if(k !== '_id' && k !== '__v' && k !== 'members')
                div.innerHTML += `<p class="h-${k}">${k}: ${v}</p>`;
        } 
        div.innerHTML += "<br>";
        document.getElementById('data').appendChild(div);
    });
})