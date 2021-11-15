const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const container = document.querySelector('div')
const ulContainer = document.querySelector('#dog-breeds')
const dropDown = document.querySelector('#breed-dropdown')
let breedsArray = []

ulContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)

function getImages(){
fetch(imgUrl)
.then(resp => resp.json())
.then(images => {
    const imgs = images.message
    let imgArray = createImgElement(imgs)
    renderImg(imgArray)
    
})}

function getBreed(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breed => {
        breedsArray = Object.keys(breed.message)
        const breedLis = createLiElement(breedsArray)
        renderLis(breedLis)
    }
    )}


function createLiElement(breedsArray){
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
    })
    
}


function createImgElement(imgs){
    return imgs.map((img) =>{
        let i = `<img src=${img}>`
        return i
    })
}

function renderImg(imgArray){
    imgArray.forEach(element => {
        container.innerHTML += element
    })
}

function renderLis(breedLis){
    breedLis.forEach(element => {
        ulContainer.innerHTML += element
    })
}

function handleClick(e){
    if(e.target.style.color === 'red'){
    e.target.style.color = 'black'}
    else{
        e.target.style.color = 'red'
    }
}

function handleChange(e){
    const letter = e.target.value
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredBreedsLis = createLiElement(filteredBreeds)
    ulContainer.innerHTML = ''
    renderLis(filteredBreedsLis)

}

getImages()
getBreed()
