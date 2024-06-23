function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show')
		}
	})
}
let movespeed
if (window.innerWidth > 1000) {
	movespeed = [0.6]
} else {
	movespeed = [0.1]
}
let options = {
	threshold: movespeed,
}
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.element-animation')

for (let elm of elements) {
	observer.observe(elm)
}

document.addEventListener('DOMContentLoaded', function () {
	const searchInput = document.querySelector('.input')
	const menuItems = document.querySelectorAll('.service-card ')

	searchInput.addEventListener('input', function () {
		const filter = searchInput.value.toLowerCase()
		menuItems.forEach(function (item) {
			const title = item.querySelector('.name').textContent.toLowerCase()
			if (title.includes(filter)) {
				item.style.display = ''
			} else {
				item.style.display = 'none'
			}
		})
	})
})
