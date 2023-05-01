const btn = document.querySelector('.btn')
const disp = document.getElementById('table')
const closebtn = document.querySelector('.close')

btn.addEventListener('click', function(){
    disp.style.display = 'block'
})

closebtn.addEventListener('click', () => {
    disp.style.display = 'none'
})