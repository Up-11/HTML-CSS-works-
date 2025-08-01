const PCButton = document.getElementById('pc-btn')
var Title = document.getElementById('disc-title')
var Discription = document.getElementById('disc')
PCButton.classList.add('active')

function toggleActive(element) {
	const buttons = document.querySelectorAll('.switch-btn')
	buttons.forEach(btn => btn.classList.remove('active'))
	element.classList.add('active')

	const contentMapping = {
		'pc-btn': {
			title: 'UCK.net VPN для ПК',
			description: 'Доступно на операционной системе Windows',
		},
		'ex-btn': {
			title: 'UCK.net VPN для Расширения',
			description: 'Доступно для браузеров на движке Chromium и Firefox',
		},
		'mb-btn': {
			title: 'UCK.net VPN для Сматрфона',
			description: 'Доступно для операционных систем Android и iOS',
		},
	}

	const content = contentMapping[element.id]
	document.getElementById('disc-title').textContent = content.title
	document.getElementById('disc').textContent = content.description
}

document.addEventListener('DOMContentLoaded', () => {
	const scrollToTopBtn = document.getElementById('scroll-to-top')

	window.addEventListener('scroll', () => {
		if (window.scrollY > 200) {
			scrollToTopBtn.classList.add('show')
		} else {
			scrollToTopBtn.classList.remove('show')
		}
	})
	scrollToTopBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
})
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show')
		}
	})
}
let movespeed
if (window.innerWidth > 1000) {
	movespeed = [0.4]
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
ы
