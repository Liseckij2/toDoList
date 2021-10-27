
let containerEl = document.querySelector("#container"),
  inputEl = document.querySelector("#container__input"),
  buttonEl = document.querySelector("#container__button"),
  toDoListEl = document.querySelector("#todo");

buttonEl.addEventListener("click", () => {
  let createDiv = document.createElement("div");
  createDiv.innerHTML =
    '<input type="checkbox" name="" class="todo__checkbox">';
  createDiv.innerHTML += `<span class="todo__span">${inputEl.value}</span>`;
  createDiv.innerHTML += '<button class="todo__button">Delete</button>';
  toDoListEl.appendChild(createDiv);

  // <input type="checkbox" name="" class="todo__checkbox">
  //   <span class="todo__span">${inputEl.value}</span>
  //   <button class="todo__button">Delete</button>

  let todoCheckboxEl = document.querySelector(".todo__checkbox"),
    todoBtnEl = document.querySelector(".todo__button"),
    todoSpanEl = document.querySelector(".todo__span");

  todoCheckboxEl.addEventListener("click", () => {
    if (todoCheckboxEl.checked === true) {
      todoSpanEl.classList.add("class");
    } else if (todoCheckboxEl.checked === false) {
      todoSpanEl.classList.remove("class");
    }
    // console.log("click");
  });
  todoBtnEl.addEventListener('click', () => {
    toDoListEl.removeChild(createDiv)
  })

  inputEl.value = "";
});
