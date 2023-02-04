function printData(data) {
  const dataDiv = document.querySelector(".data-div");

  const city = document.createElement("div");
  city.textContent = `${data.name}`;
  const temp = document.createElement("div");
  temp.textContent = `${String(data.main.temp)}`;

  dataDiv.append(city, temp);
}
export default printData;
