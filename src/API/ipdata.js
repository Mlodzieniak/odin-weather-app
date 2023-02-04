function getIpData() {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open(
      "GET",
      "https://api.ipdata.co/?api-key=ba693b5e88cb1b09d451c5cfa70f9fbe53a2b1cb6feb4d4f30855b6d"
    );

    request.setRequestHeader("Accept", "application/json");

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(
            new Error(`Request failed with this status code: ${this.status}`)
          );
        }
      }
    };

    request.send();
  });
}
export default getIpData;
