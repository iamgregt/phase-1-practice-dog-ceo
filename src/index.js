const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

let getDogs = fetch(imgUrl)
.then(resp => resp.json())
.then(dogData => dogData.foreach((dog) => console.log(dog)))

    
//     {
//     dogs.forEach(dog => {
//         let pics = document.querySelector('div')
//     let newDog = document.createElement('img')
//     newDog.innerHTML = `src=${dog.message}`
//     pics.appendChild(newDog)
        
//     });
// })


// function putOnPage(dog){
//     let pics = document.querySelector('div')
//     let newDog = document.createElement('img')
//     newDog.imgUrl =
//     pics.appendChild(newDog)

    
// }