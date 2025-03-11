import { createDiv, createText, createLink, content, createAttribute } from "./funcs.js";
export { landingPageLoad };

function landingPageLoad() {
  content.appendChild(createDiv());
  content.appendChild(createDiv());
  content.firstChild.classList.add("title__heading");
  content.lastChild.classList.add("attribute");

  const titleHeading = document.querySelector(".title__heading");
  titleHeading.appendChild(createDiv());
  titleHeading.appendChild(createDiv());
  titleHeading.firstChild.textContent = "Restful Restaurant";
  titleHeading.lastChild.textContent =
    "Welcome to Restful Restaurant, a serene escape where great food meets peaceful ambiance. Nestled in a tranquil setting, we invite you to indulge in a dining experience that nourishes both body and soul. Our carefully crafted menu features fresh, locally-sourced ingredients, thoughtfully prepared to bring out their natural flavors. Whether you're here for a quiet meal with loved ones, a solo retreat, or a special celebration, we offer a relaxing environment that encourages you to unwind, savor, and enjoy every moment. Come, let us provide you with an experience that refreshes and restores.";
  titleHeading.lastChild.classList.add("title__para");
  titleHeading.appendChild(document.createElement("button"));
  titleHeading.lastChild.classList.add("title__button");
  titleHeading.lastChild.textContent = "Book Now";

  createAttribute();
}
