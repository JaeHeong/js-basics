/**니꼬형꺼 밑에 있음 */

const weather = document.querySelector(".js-weather");
const API_KEY = "e92e9821cc75ae92a20559f2ecbddcd5";
const COORDS = "coords";

function saveWeather(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function painWeather(temp, place) {
  weather.innerText = `It's ${temp}℃ in ${place} right now!`; /**${}이걸 잘 이용하자 */
}

function getWeather(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ) /**API 사용할 때 이렇게 fetch라는 함수를 사용해준다. 주의할점은 ``백틱을 사용해줘야한다. */
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temp = json.main.temp;
      const place = json.name;
      painWeather(temp, place);
    });
}

function successCallback(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const coordsObj = {
    latitude: lat,
    longitude: lon
  };
  getWeather(lat, lon);
  saveWeather(coordsObj);
}

function errorCallback() {
  console.log("Where are you?");
}

function loadcoords() {
  const currentCoords = localStorage.getItem(COORDS);
  if (currentCoords === null) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    /**현재 위치 가져오는 함수이다! */
  } else {
    const parsedCoords = JSON.parse(currentCoords);

    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadcoords();
}

init();

/**
 * const weather = document.querySelector(".js-weather");

const API_KEY = "e92e9821cc75ae92a20559f2ecbddcd5";

const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      const temperature = json.list["0"].main.temp;
      const place = json.city.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

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
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();

 */
