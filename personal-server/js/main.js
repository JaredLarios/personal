import home from "./home-content.js";

const url = 'https://jaredlarios.github.io/personal/personal-server/data/content.json';

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(
      (objJson) => {
          home.header(objJson);
          console.log(objJson);

          home.body(objJson)
    })