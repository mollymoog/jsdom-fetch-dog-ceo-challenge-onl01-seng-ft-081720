console.log('%c HI', 'color: firebrick')

document.addEventListener(`DOMContentLoaded`, function() {
    fetchDog();
    dogBreeds();
    // breedMenu();
});


function fetchDog() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(results => results.message.forEach(image => renderImg(image)));
}

function renderImg(image) {
    let container = document.getElementById("dog-image-container");
    let imgEl = document.createElement("img");
    imgEl.src = image;
    container.appendChild(imgEl);
}

function dogBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    return fetch(breedUrl)
        .then(resp => resp.json())
        .then(function(results) {
            breeds = Object.keys(results.message);
            breedList(breeds);
            breedMenu()});
}

function breedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => listDog(breed));
}

function listDog(breed) {
    let container = document.getElementById("dog-breeds");
    let dogEl = document.createElement("li");
    dogEl.style.cursor = "pointer";
    let dogBreed = document.createTextNode(breed);

    dogEl.appendChild(dogBreed);
    container.appendChild(dogEl);
    dogEl.addEventListener("click", function(e) {
        e.target.style.color = "pink";
    });
}

function sortBreed(letter) {
    console.log(letter);
    breedList(breeds.filter(breed => breed.startsWith(letter)));
}

function breedMenu() {
    let menu = document.getElementById("breed-dropdown");
    menu.addEventListener("change", (e) => sortBreed(e.target.value));
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

