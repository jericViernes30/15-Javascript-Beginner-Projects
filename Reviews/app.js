const reviews = [
    {
        id:1,
        name:"Jeric James Viernes",
        job:"Full stack developer",
        img:"pic-1.jpg",
        text:"Hello, my name is Jeric James Viernes. I'm 20 years old from Cabuyao Laguna. I'm currently at 2nd year college taking Bachelor of Science in Information Technology. I specialized in programming language such as Javascript and Python.",
    },
    {
        id:2,
        name:"ChatGPT",
        job:"AI Model",
        img:"pic-3.jpg",
        text:"Hello, my name is ChatGPT. I am a language model designed to assist and communicate with humans. My purpose is to provide helpful and informative responses to any questions or inquiries you may have.",
    },
    {
        id:3,
        name:"David Shane",
        job:"UX Designer",
        img:"pic-2.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit esse voluptatum dignissimos aperiam suscipit, rerum accusamus cupiditate non hic.",
    }

]

// select items
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const surpBtn = document.querySelector('.surprise-btn')

let currentItem = 0

nextBtn.addEventListener('click', () => {
    currentItem += 1
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson(currentItem)

})

prevBtn.addEventListener('click', () => {
    currentItem -= 1
    if(currentItem < reviews.length - 1){
        currentItem = 0
    }
    showPerson(currentItem)
})

surpBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random()*reviews.length)
    showPerson(random)
})


window.addEventListener('DOMContentLoaded',() => {
    showPerson(currentItem)
})

function showPerson(person) {
    const item = reviews[person] //assigning to item for easier access to property like shown below
// load initial item\
    img.src = item.img
    job.textContent = item.job 
    job.style.fontSize = "10px"
    job.style.color = "rgb(69, 189, 229)"
    job.style.textTransform = "uppercase"
    job.style.fontWeight = "bold"
    job.style.textAlign = "center"
    author.textContent = item.name
    author.style.color = "#333"
    author.style.textAlign = "center"
    info.textContent = item.text
    info.style.fontSize = "smaller"
    info.style.letterSpacing = "1px"
    info.style.color = "#333"
}

