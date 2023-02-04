import "./main.css";
import getIpData from "./API/ipdata";
import getWeather from "./API/openWeatherMap";
import printData from "./printData";

const submitBTN = document.querySelector(".submit-loc-btn");
const locInput = document.querySelector(".loc-input");
const locInputError = document.querySelector(".loc-input-error");

window.onload = async () => {
  if (!locInput.value.length) {
    locInputError.className = "loc-input-error hide";
  }
  try {
    const ipdata = await getIpData();
    const location = [ipdata.latitude, ipdata.longitude];
    const weatherData = await getWeather(location);
    console.log(weatherData);
    console.log(typeof weatherData);
    printData(weatherData);
  } catch (error) {
    console.log(error);
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
