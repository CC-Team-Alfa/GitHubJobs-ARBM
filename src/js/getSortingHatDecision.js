function getSortingHatDecision() {
    var url = `https://www.potterapi.com/v1/sortingHat`;
    return fetch(url)
        .then(res => res.json())
        .then(res => console.log(res))
    export default getSortingHatDecision;
}
