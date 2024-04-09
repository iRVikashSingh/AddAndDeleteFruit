// Add the Edit Button:

const btnText = "Edit";
const addBtn = document.querySelectorAll(".fruit");
for (let i = 0; i < addBtn.length; i++) {
  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  addBtn[i].appendChild(editBtn);
}
// Implement the code as in video but with one extra 'Edit' button in 'li'

const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const addFruits = document.getElementById("fruit-to-add");
  const newLi = document.createElement("li");
  newLi.className = "fruit";
  newLi.innerHTML = addFruits.value + '<button class="delete-btn">x</button>';

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  newLi.appendChild(editBtn);
  fruits.appendChild(newLi);
});

fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});
