const marvelApi = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150"
 
fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=5fea457324f6f3a564b0143d51f5e005&hash=88e821f461e9081adb5a04125eb9274a&limit=50")
    .then(function (response){
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })