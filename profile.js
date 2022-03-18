const revealColor = (e) => {
    alert ('dark gray, light gray, medium gray')
}

const showPlace = (e) => {
   
    alert('anywhere with a chair')
}

const myRitual = (e) => {
    
    alert('playing couch co-op games ')
}
const color = document.getElementById("color")
const place = document.getElementById('place')
const ritual = document.getElementById('ritual')


color.addEventListener('click', revealColor)
place.addEventListener('click', showPlace)
ritual.addEventListener('click', myRitual)