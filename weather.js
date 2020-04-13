const API_KEY = '901dc5de6cd33d2d1be7421c08a32251';
const COORDS = 'coords';

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
}

function handleGeoError() {
	console.log("Can't access geo location");
}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
	const loadedCords = localStorage.getItem(COORDS);
	if (loadedCords === null) {
		askForCoords();
	} else {
		// getWeather
	}
}

function init() {
	loadCoords();
}

init();
