// function that generates a link 
function generateCharacterEndpoint(parameters) {
    var url = 'https://www.potterapi.com/v1/characters';
    var apiKey = "key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm";
    var param = "";
    for (var key in parameters) {
        var value = parameters[key];
        param += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    }
    if (param.length > 0) {
        param = param.substring(0, param.length - 1);
        url = url + "?" + apiKey + "&" + param
    } 
    if (parameters == null) {
        url = url + "?" + apiKey
    }
    return url;
}

export default generateCharacterEndpoint;

//example
//generateCharacterEndpoint({"bloodStatus":"pure-blood", "role":"student"})
// -> "https://www.potterapi.com/v1/characters?key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm&bloodStatus=pure-blood&role=student"
