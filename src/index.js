import "./main.css";

const submitBTN = document.querySelector(".submit-loc-btn");
const locInput = document.querySelector(".loc-input");
const locInputError = document.querySelector(".loc-input-error");

async function getWeather(location) {
  // const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=079cafdb1061e25da34e6c0d52fe356d`, { mode: 'cors' });
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=079cafdb1061e25da34e6c0d52fe356d`, { mode: "cors" });
  const data = await promise.json();
  console.log(data);
}

window.onload = () => {
  if (!locInput.value.length) {
    locInputError.className = "loc-input-error hide";
  }
};
locInput.oninput = () => {
  if (locInput.value.length > 2) {
    locInputError.className = "loc-input-error hide";
  }
};
submitBTN.onclick = () => {
  if (locInput.value.length) {
    getWeather(locInput.value);
  } else {
    locInputError.textContent = "You need to provide location.";
    locInputError.className = "loc-input-error";
  }
};
// getWeather('inowroclaw');
