// 1. get all the elements from html dom
const openBtn = document.querySelector('#open-btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('#close-btn')
const overlay = document.querySelector('.overlay')

// 2. when clicked on open modal a class should be added to the modal div
// and overlay to body element
openBtn.addEventListener('click', () =>{
    modal.classList.add('open')
    overlay.classList.add('open')

})
// 3. when clicked on close modal the classes added previously should be removed
closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.remove('open')
    overlay.classList.remove('open')
}