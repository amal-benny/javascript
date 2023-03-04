const button = document.querySelector("button")
const body =document.querySelector("body")
const color =['red','green','blue','purple','yellow','pink']

body.style.backgroundColor = 'violet'

button.addEventListener('click', changeb)

function changeb(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}