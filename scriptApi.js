let display = document.querySelector("#display");
let movie = document.querySelector("#movie");
let actors = document.querySelectorAll("#actors");
let mainImg = document.querySelector("#hero");
let searchInput = document.querySelector("#searchInput");
let searchBtn = document.querySelector("#searchBtn");
let btn = document.querySelector("#btn");
let cardImgElement = document.querySelector(".card-image");
let plotElement = document.querySelector("#plot");
let genreElement = document.querySelector("#genre");
let imdbRatingElement = document.querySelector("#imdb");
let boxOfficeElement = document.querySelector("#box-office");
let presentElement = document.querySelector(".present")

display.style.visibility = "hidden";
btn.style.visibility = "hidden";
cardImgElement.style.visibility = "hidden";
presentElement.style.visibility = "hidden";

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();

  fetch("https://www.omdbapi.com/?t=" + searchInput.value + "&apikey=6aa91fd2")
    .then(function (response) {
      console.log(response);
      console.log(response);

      if (response.status === 404) {
        alert("search not found");
      } else if (searchInput.value === "") {
        alert("input field cant be empty");
      } else {
        display.style.visibility = "visible";
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let actorQuan = data.Actors;
      let one = actorQuan.split(",");

      for (let i = 0; i < one.length; i++) {
        actors[i].textContent = one[i];
        movie.textContent = data.Title + " " + data.Year;
      }
      cardImgElement.style.visibility = "visible"
      cardImgElement.src = data.Poster;
      presentElement.style.visibility = "visible"
      plotElement.textContent = data.Plot;
      genreElement.textContent = data.Genre;
      imdbRatingElement.textContent = "Imdb Rating - " + data.imdbRating;
      boxOfficeElement.textContent = "Box Office Revenue - " + data.BoxOffice;
      btn.style.visibility = "visible"
      wikipediaApi();
    });

  //wikipedia
  function wikipediaApi() {
    fetch(
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        movie.innerHTML +
        "&format=json" +
        "&origin=*"
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let filmArray = data[3][0];
        if (filmArray === undefined) {
          btn.style.visibility = "hidden";
        }
        console.log(filmArray);
        btn.addEventListener("click", function (event) {
          let filmArray = data[3][0];
          wikipediaApi();
          event.preventDefault();
          window.location = filmArray;
        });
      });
  }
});
