console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newToast = document.createElement("li");
  newToast.classList.add("toast-container__message");
  newToast.textContent = "new toast message";

  toastContainer.append(newToast);
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
  // Exercise: Clear the stack of toast messages
});
