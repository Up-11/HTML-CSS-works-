const navBar = document.getElementById('nav')
const overlay = document.getElementById('overlay')
const openMenuButton = document.getElementById('openMenuButton')
const closeMenuButton = document.getElementById('closeMenuButton')

openMenuButton.addEventListener('click', () => {
	navBar.classList.add('open')
	overlay.classList.add('show')
})
closeMenuButton.addEventListener('click', () => {
	navBar.classList.remove('open')
	overlay.classList.remove('show')
})
overlay.addEventListener('click', () => {
	navBar.classList.remove('open')
	overlay.classList.remove('show')
})
