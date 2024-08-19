import { faqs } from "./faqs.js";
import accordion from "./accordion.js";

const accordionContainer = document.getElementById("accordion-container");

const accordionButton = document.getElementsByClassName("accordion-button");

faqs.forEach((value) => {
  let newEl = document.createElement("div");

  newEl.className = "accordion-card";
  newEl.innerHTML = accordion(value);

  accordionContainer.appendChild(newEl);
});

for (let index = 0; index < accordionButton.length; index++) {
  const button = accordionButton[index];

  button.onclick = () => button.classList.toggle("accordion-active");
  console.log(button);
}
