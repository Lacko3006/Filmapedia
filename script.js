let searchInput = document.querySelector("#searchInput");

let searchBtn = document.querySelector("#searchBtn");


searchBtn.addEventListener("click", function(event){

    event.preventDefault();


//http://www.omdbapi.com/?i=tt3896198&apikey=6aa91fd2


fetch("http://www.omdbapi.com/?t="+searchInput.value+"&apikey=6aa91fd2")
.then(function(response){
    return response.json();
})
.then (function(data){
    console.log(data)
})

})

