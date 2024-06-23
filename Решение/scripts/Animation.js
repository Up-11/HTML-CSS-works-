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

document.addEventListener('DOMContentLoaded', function () {
	const categoryLinks = document.querySelectorAll('.hidden-categories__item')
	const grids = document.querySelectorAll('.col')

	categoryLinks.forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault()
			const category = this.getAttribute('data-category')

			grids.forEach(grid => {
				const categoryButtton = document
					.getElementById('category')
					.addEventListener('click', () => {
						grid.style.display = 'flex'
						grid.style.justifyContent = 'center'
					})
				if (
					grid.getAttribute('data-category') === category ||
					category === 'all'
				) {
					grid.style.display = 'flex'
				} else {
					grid.style.display = 'none'
				}
			})
		})
	})
})
