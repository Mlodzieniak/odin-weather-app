async function getWeatherByCity(location) {
  try {
    const promise = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=079cafdb1061e25da34e6c0d52fe356d`,
      { mode: "cors" }
    );
    const data = await promise.json();
    return data;
  } catch (error) {
    throw new Error(`Error occured in getWeatherByCity: ${error}`);
  }
  // const promise = fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=079cafdb1061e25da34e6c0d52fe356d`,
  //   { mode: "cors" }
  // );
  // promise
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(`weahter by city err ${err}`));
}
export default getWeatherByCity;
