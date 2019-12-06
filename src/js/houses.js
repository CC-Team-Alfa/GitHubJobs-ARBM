import getHogwartHouses from "./getHogwartHouses";

const data = document.getElementById('data');

getHogwartHouses().then(array => {
    array.forEach(element => {
        for(const [k, v] of Object.entries(element)) {
            data.innerHTML += `<p>${k}: ${v}</p>`;
        }
    });
})