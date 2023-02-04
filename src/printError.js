function printError(error) {
  const dataDiv = document.querySelector(".data-div");
  dataDiv.innerHTML = "";
  const emoji = document.createElement("div");
  emoji.innerHTML = "😢";
  const message = document.createElement("div");
  message.innerHTML = "Oops... Something went wrong.";
  const errorMessage = document.createElement("div");
  errorMessage.innerHTML = `${error}`;
  dataDiv.append(emoji, message, errorMessage);
}
export default printError;
