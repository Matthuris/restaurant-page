import "./styles.css";
import "./reset.css";
import { createUl, createBtn, content } from "./funcs";
import { landingPageLoad } from "./landingPage";
import { menuPageLoad } from "./menuPage";
import { contactPageLoad } from "./contactPage";

const nav = document.querySelector("nav");
nav.appendChild(createUl());
const navUl = document.querySelector("nav ul");
navUl.appendChild(createBtn());
navUl.lastChild.textContent = "About Us";
navUl.lastChild.id = "landing";
navUl.lastChild.classList.add("nav");
navUl.appendChild(createBtn());
navUl.lastChild.textContent = "Our Menu";
navUl.lastChild.id = "menu";
navUl.lastChild.classList.add("nav");
navUl.appendChild(createBtn());
navUl.lastChild.textContent = "Contact Us";
navUl.lastChild.id = "contact";
navUl.lastChild.classList.add("nav");

const listenBtns = () => {
  const navBtns = document.querySelectorAll(".nav");
  navBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      while (content.lastChild) {
        content.removeChild(content.lastChild);
      }
      switch (btn.id) {
        case "menu":
          menuPageLoad();
          break;
        case "contact":
          contactPageLoad();
          break;
        default:
          landingPageLoad();
      }
    });
  });
};

listenBtns();
landingPageLoad();
