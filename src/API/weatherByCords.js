async function getWeatherByCords(location) {
  try {
    const promise = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=079cafdb1061e25da34e6c0d52fe356d`,
      { mode: "cors" }
    );
    const data = await promise.json();
    return data;
  } catch (error) {
    throw new Error(`Weather by cords error: ${error}`);
  }
}
export default getWeatherByCords;
