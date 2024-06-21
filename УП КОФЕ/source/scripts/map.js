var map
const endPoint = [56.054693, 92.888828]
DG.then(function () {
	map = DG.map('map', {
		center: [56.054693, 92.888828],
		zoom: 13,
	})

	DG.marker([56.054693, 92.888828])
		.addTo(map)
		.bindPopup('ул. Петра подзолкова 10 || Гармония вкуса')
})

document.getElementById('routeButton').addEventListener('click', event => {
	event.preventDefault()
	const url = `https://2gis.ru/krasnoyarsk/search/%D0%93%D0%B0%D1%80%D0%BC%D0%BE%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%BA%D1%83%D1%81%D0%B0%20%D0%BA%D0%BE%D1%84%D0%B5%20%D0%B8%20%D0%B4%D0%B5%D1%81%D0%B5%D1%80%D1%82%D1%8B/firm/70000001089549919/92.889704%2C56.054458?m=92.831925%2C56.005415%2F11`
	window.location.href = url
})
