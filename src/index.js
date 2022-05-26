const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', ()=>{
    startFetchImg()
    startFetchBreed()
})

function startFetchImg() {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(objects =>{
            renderDogs(objects.message)
        })
}

function renderDogs(urls) {
    urls.forEach(url =>{
        const dogImageContainer = document.getElementById('dog-image-container')
        
        let img = document.createElement('img')
        img.setAttribute('src' , url)
        dogImageContainer.append(img)
    })
}

function startFetchBreed() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(objects => {
            renderBreeds(Object.keys(objects.message))
        })
}

function renderBreeds(breeds) {
    breeds.forEach(breed => {
        const dogBreeds = document.getElementById('dog-breeds')

        let li = document.createElement('li')
        li.textContent = breed
        dogBreeds.append(li)
    })
}