function validateInput() {
  let inputField = document.querySelector("#inputField");
  let inputValue = inputField.value.trim();
  const errorMessage = document.querySelector("#error-message");

  if (inputValue === "") {
    inputField.classList.add("shake");
    errorMessage.style.visibility = "visible";
    setTimeout(function () {
      inputField.classList.remove("shake");
      errorMessage.style.visibility = "hidden";
    }, 500);
  } else {
    alert("Submitted");
  }
}
