console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchDog() {
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImg(json));
}

function renderImg(images) {
    
}
