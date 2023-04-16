const show = document.querySelector(".modal-btn")
const closeModal = document.querySelector(".btn-close")
const modal = document.getElementById("modal-overlay")

show.addEventListener('click', () => {
    modal.style.display = "block"
})

closeModal.addEventListener('click', () => {
    modal.style.display = "none"
})