let display = document.querySelector("#display");
let movie = document.querySelector("#movie");
let date = document.querySelector("#date");
let actors = document.querySelectorAll("#actors");
let mainImg = document.querySelector("#hero");
let searchInput = document.querySelector("#searchInput");
let searchBtn = document.querySelector("#searchBtn");

let btn = document.querySelector("#btn");

display.style.visibility = "hidden";

searchBtn.addEventListener("click", function(event){
    event.preventDefault();

btn.addEventListener("click", function(){
alert("hello");
})

fetch("http://www.omdbapi.com/?t="+searchInput.value+"&apikey=6aa91fd2")
.then(function(response){
    console.log(response); 
    if(response.status == 404){
        alert("search not found");
    } else if(searchInput.value === ""){
        alert("input field cant be empty")
    } else{
        display.style.visibility = "visible";
    }
    return response.json();

})
    .then (function(data){
    console.log(data);

    let actorQuan = data.Actors;
    let one = actorQuan.split(",");
    console.log(one.length);

        for(let i=0; i<one.length; i++){
            actors[i].textContent = one[i];
            movie.textContent = data.Title + " -";
            date.textContent = data.Released;
            mainImg.textContent = data.Poster
        }
    }) 
})

