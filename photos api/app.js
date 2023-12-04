const auth= 'HI2P5U1q1TdewTmcoHz3IgVQOFiyP82WlSlgmXxlDo0V5ZAzBRukII40'

const gallery = document.querySelector(".gallery")
const search = document.querySelector(".search-input")
const form = document.querySelector(".search-form")
let searchValue;

function curatedphotos (){
 fetch("https://api.pexels.com/v1/curated?per_page=20",{
    method: "GET",
    headers: {
        Accept: "application/json",
        Authorization: auth

    }
 })
 .then(res => res.json())
 .then(data => displayPhoto(data))
}

curatedphotos()

function displayPhoto(photos) {
    let allPhotos = photos.photos


    allPhotos.forEach(photo => {
        // console.log(photo)
        const galleryImage = document.createElement("div")
        galleryImage.classList.add("gallery-img")
        galleryImage.innerHTML = `

        <img src="${photo.src.large}" alt="">
        <a href="${photo.src.original}">Download</a>
        <p>${photo.photographer}</p>

        `
        gallery.appendChild(galleryImage)
    });
}


function searchphotos(){
    fetch(`https://api.pexels.com/v1/search?query=nature&per_page=5`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    })

    .then(res => res.json())
    .then(data => displaySearch(data))
}
// searchphotos()

function displaySearch(query) {
    let allPhotos = query.photos
    console.log(allPhotos)

    allPhotos.forEach(photo => {
        // console.log(photo)

        const galleryImage = document.createElement("div")
        galleryImage.classList.add("gallery-img")
        galleryImage.innerHTML = `

        <img src="${photo.src.large}" alt="">
        <a href="${photo.src.original}">Download</a>
        <p>${photo.photographer}</p>

        `
        gallery.appendChild(galleryImage)
    });
}


searchInput.addEventListener("input", updateSearch)

function updateSearch(e){
    console.log(e)
}
