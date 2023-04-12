// declare a list of color names
const colors = ["Green", "Red", "rgba(133,122,200)", "Blue", "Aqua", "Brown", "Maroon"]

// declare the variable by getting the element ID
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// add an event listener for button click 'click'
btn.addEventListener('click', function() {

    // get random number between 0 and 3
    const randomNumber = getRandomNumber() // function callback stored in a variable
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

// a function to generate a random number
function getRandomNumber () {
    return Math.floor(Math.random()*colors.length) // round down
}