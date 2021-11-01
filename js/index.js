let inputEl = document.querySelector(".container__input"),
  buttonEl = document.querySelector(".container__button"),
  toDoListEl = document.querySelector(".todo");

buttonEl.addEventListener("click", () => {
  let createDiv = document.createElement("div");
  createDiv.className = "note";

  let createInput = document.createElement("input");
  createInput.setAttribute("type", "checkbox");
  createInput.setAttribute("class", "checkbox_checked");
  createDiv.appendChild(createInput);

  let createSpan = document.createElement("span");
  createSpan.textContent = `${inputEl.value}`;
  createDiv.appendChild(createSpan);

  let creareButton = document.createElement("input");
  creareButton.setAttribute("type", "button");
  creareButton.setAttribute("value", "DELETE");
  creareButton.className = "container__button";
  createDiv.appendChild(creareButton);

  toDoListEl.appendChild(createDiv);

  createDiv.addEventListener("click", () => {
    console.log("click");
    if (createInput.checked === true) {
      createSpan.classList.add("class");
    } else if (createInput.checked === false) {
      createSpan.classList.remove("class");
    }
  });
  creareButton.addEventListener("click", () => {
    toDoListEl.removeChild(createDiv);
  });
  inputEl.value = "";
});
