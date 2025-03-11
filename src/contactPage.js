import { createDiv, createAttribute, content, createPara } from "./funcs.js";
export { contactPageLoad };

function contactPageLoad() {
  content.appendChild(createDiv());
  content.lastChild.classList.add("title__heading");

  const titleHeading = document.querySelector(".title__heading");
  titleHeading.appendChild(createDiv());
  titleHeading.lastChild.textContent = "Contact Us";
  titleHeading.appendChild(createDiv());
  titleHeading.lastChild.classList.add("title__para");
  titleHeading.lastChild.classList.add("contact");

  const titlePara = document.querySelector(".title__para");

  const addLine = (title, arr) => {
    titlePara.appendChild(createPara());
    titlePara.lastChild.classList.add("heading");
    titlePara.lastChild.textContent = title;
    arr.forEach((element) => {
      const newLine = createPara();
      newLine.textContent = element;
      titlePara.appendChild(newLine);
    });
  };

  addLine("Address:", ["456 Calm Street,", "Serenity Town,", "Tranquil Valley, 78901"]);
  addLine("Phone:", ["+1 (555) 987-6543", "+1 (555) 876-5432 (Reservations)"]);
  addLine("Email:", ["info@restfulrestaurant.com", "reservations@restfulrestaurant.com"]);
  addLine("Website:", ["www.restfulrestaurant.com"]);
  addLine("Social Media:", [
    "Instagram: @RestfulRestaurant",
    "Facebook: facebook.com/RestfulRestaurant",
    "Twitter: @Restful_Restaurant",
  ]);

  content.appendChild(createDiv());
  content.lastChild.classList.add("attribute");
  createAttribute();
}
