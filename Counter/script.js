let count = 0

let inc = document.getElementById('increase')
let reset = document.getElementById('reset')
let dec = document.getElementById('decrease')
let digit = document.getElementById('digit')

inc.addEventListener('click', () => {
     count +=1
    digit.innerHTML = count
})

dec.addEventListener('click', () => {
    if(count == 0) {
        digit.innerHTML = 0
    } else {
        count -= 1
        digit.innerHTML = count
    }
})

reset.addEventListener('click', () => {
    count = 0
    digit.textContent = count
})