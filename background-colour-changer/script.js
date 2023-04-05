const button = document.querySelector("button")
const body =document.querySelector("body")
const color =['#1ABC9C','#56925D','#E8BE31','#CE4824']

body.style.backgroundColor = 'violet'

button.addEventListener('click', changeb)

function changeb(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}