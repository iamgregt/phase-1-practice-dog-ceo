const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let getDogs = fetch(imgUrl)
.then(resp => resp.json())
.then(data => data.message.forEach(url => putOnPage(url)))

let getBreeds = fetch(breedUrl)
.then(resp => resp.json())
.then(data => console.log(data))


function putInList(breed){
    let breedList = document.getElementById('dog-breeds')
    let newBreed = document.createElement('li')
    newBreed.innerText = `${breed}`
    breedList.appendChild(newBreed)
}


function putOnPage(url){
    let pics = document.querySelector('div')
    let newDog = document.createElement('li')
    newDog.innerHTML = `<img src="${url}">`
    pics.appendChild(newDog)

    
}