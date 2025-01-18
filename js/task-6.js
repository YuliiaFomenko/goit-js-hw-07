function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton =
  controls.querySelector("[data-create]");
const destroyButton = controls.querySelector(
  "[data-destroy]"
);
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  boxes.innerHTML = "";

  const elements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    elements.push(box);
  }

  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value.trim(), 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); //
  } else {
    alert("Please enter a number between 1 and 100.");
    input.value = "";
  }
});

destroyButton.addEventListener("click", destroyBoxes);
