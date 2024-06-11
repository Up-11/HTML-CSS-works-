document
	.querySelector('.scroll-down-btn')
	.addEventListener('click', function () {
		scrollPage()
	})

function scrollPage() {
	const scrollDistance = 900
	window.scrollBy({
		top: scrollDistance,
		left: 0,
		behavior: 'smooth',
	})
}
