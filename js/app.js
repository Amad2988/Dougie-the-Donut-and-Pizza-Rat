const bronx = document.querySelector("#bronx");
const brooklyn = document.querySelector("#brooklyn");
const manhattan = document.querySelector("#manhattan");
const queens = document.querySelector("#queens");
const statenIsland = document.querySelector("#staten-island");
const limit = document.getElementById("limit");

bronx.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=BRONX&$limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
});

brooklyn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=BROOKLYN&$limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
});

manhattan.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=MANHATTAN&$limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
});

queens.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=QUEENS&$limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
});

statenIsland.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=STATEN%20ISLAND&$limit=${limit.value}`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
});

// fetch(
//   "https://data.cityofnewyork.us/resource/erm2-nwe9.json?&agency=NYPD&borough=" +
//     borough +
//     "&$limit=" +
//     limit
// )
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));
