function printData(data) {
  const dataDiv = document.querySelector(".data-div");
  dataDiv.className = "data-div hide";
  if (typeof data !== "undefined") {
    dataDiv.innerHTML = "";

    const city = document.createElement("div");
    city.classList.add("city");
    city.textContent = `${data.name}, ${data.sys.country}`;
    const temp = document.createElement("div");
    const temperature = Math.floor((data.main.temp - 272.15) * 10) / 10;
    temp.innerHTML = `Temp ${temperature}&#8451;`;
    const hum = document.createElement("div");
    hum.textContent = `Humidity ${data.main.humidity}%`;
    const weather = document.createElement("div");
    weather.textContent = `${data.weather[0].main}`;
    const wind = document.createElement("div");
    wind.textContent = `Wind ${data.wind.speed}m/s`;
    const clouds = document.createElement("div");
    clouds.textContent = `Clouds ${data.clouds.all}%`;

    dataDiv.append(city, weather, temp, hum, wind, clouds);

    const image = document.createElement("img");

    image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weather.append(image);

    dataDiv.className = "data-div show";
  }
}
export default printData;
