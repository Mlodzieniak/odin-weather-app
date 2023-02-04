import "./main.css";
import getIpData from "./API/ipdata";
import getWeatherByCords from "./API/weatherByCords";
import printData from "./printData";
import submitData from "./submitData";

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
    const weatherData = await getWeatherByCords(location);
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
locInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitData();
  }
});
submitBTN.onclick = submitData();

// async function submitData() {
//   if (locInput.value.length) {
//     const weatherData = await getWeatherByCity(locInput.value);
//     if (weatherData.cod === 200) {
//       printData(weatherData);
//     } else {
//       printError(weatherData.message);
//     }
//   } else {
//     locInputError.textContent = "You need to provide location.";
//     locInputError.className = "loc-input-error";
//   }
// }
