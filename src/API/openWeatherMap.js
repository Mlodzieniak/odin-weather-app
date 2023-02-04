async function getWeather(location) {
  //   const promise = async () => {
  //     if (typeof location !== "string") {
  //       await fetch(
  //         `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=079cafdb1061e25da34e6c0d52fe356d`,
  //         { mode: "cors" }
  //       );
  //     } else {
  //       await fetch(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=079cafdb1061e25da34e6c0d52fe356d`,
  //         { mode: "cors" }
  //       );
  //     }
  //   };
  //   const data = await promise();
  //   console.log(data);
  if (typeof location !== "string") {
    const promise = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=079cafdb1061e25da34e6c0d52fe356d`,
      { mode: "cors" }
    );
    const data = await promise.json();
    console.log(data);
    return data;
  }
  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=079cafdb1061e25da34e6c0d52fe356d`,
    { mode: "cors" }
  );
  const data = await promise.json();
  console.log(data);
  return data;
}
export default getWeather;
