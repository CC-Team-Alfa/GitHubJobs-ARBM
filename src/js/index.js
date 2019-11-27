import '../css/style.css';

// function that generates a link 
function generateCharacterEndpoint(path, parameters) {
    var apiKey = "key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm"
    var url = 'https://www.potterapi.com/v1';
    var path = path || {}
    var param = "";
    for (var key in parameters) {
        var value = parameters[key];
        param += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    }
    if (param.length > 0) {
        param = param.substring(0, param.length - 1);
        url = url + `/${path}` + "?" + apiKey + "&" + param
    } else if (param = "null") {
        url = url + `/${path}` + "?" + apiKey
    }
    return url;
}

//example
// generateCharacterEndpoint("houses")
// -> "https://www.potterapi.com/v1/houses?key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm"

// generateCharacterEndpoint("characters",{"bloodStatus":"pure-blood","role":"student"})
// -> https://www.potterapi.com/v1/characters?key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm&bloodStatus=pure-blood&role=student
