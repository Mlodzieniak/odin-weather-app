import getWeatherByCity from "./API/weatherByCity";
import printData from "./printData";
import printError from "./printError";

async function submitData() {
  const locInput = document.querySelector(".loc-input");
  const locInputError = document.querySelector(".loc-input-error");
  if (locInput.value.length) {
    const weatherData = await getWeatherByCity(locInput.value);
    if (weatherData.cod === 200) {
      printData(weatherData);
    } else {
      printError(weatherData.message);
    }
  } else {
    locInputError.textContent = "You need to provide location.";
    locInputError.className = "loc-input-error";
    locInputError.classList.remove("hide");
  }
}
export default submitData;
