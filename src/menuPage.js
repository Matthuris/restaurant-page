import {
  createDiv,
  createText,
  createLink,
  createPara,
  createUl,
  createLi,
  createAttribute,
  content,
} from "./funcs.js";
export { menuPageLoad };

function menuPageLoad() {
  content.appendChild(createDiv());
  content.lastChild.textContent = "Our menu";
  content.lastChild.classList.add("title__heading");

  content.appendChild(createDiv());
  content.lastChild.classList.add("menu");

  const menu = document.querySelector(".menu");

  menu.appendChild(createDiv());
  menu.lastChild.classList.add("course", "starter");
  menu.appendChild(createDiv());
  menu.lastChild.classList.add("course", "main");
  menu.appendChild(createDiv());
  menu.lastChild.classList.add("course", "dessert");

  const createCourse = (course) => {
    let curCourse = document.querySelector(`.${course}`);
    curCourse.appendChild(createPara());
    curCourse.lastChild.classList.add("heading");
    curCourse.lastChild.textContent = `${course.slice(0, 1).toUpperCase()}${course.slice(1)}s`;
    curCourse.appendChild(createUl());
  };

  const createDish = (course, title, desc) => {
    const curList = document.querySelector(`.${course} ul`);
    curList.appendChild(createLi());
    curList.lastChild.appendChild(createPara());
    curList.lastChild.lastChild.classList.add("heading");
    curList.lastChild.lastChild.textContent = title;
    curList.lastChild.appendChild(createPara());
    curList.lastChild.lastChild.textContent = desc;
  };

  createCourse("starter");
  createDish(
    "starter",
    "Tomato & Basil Bruschetta",
    "Toasted baguette slices topped with fresh diced tomatoes, garlic, basil, and a drizzle of balsamic glaze."
  );
  createDish(
    "starter",
    "Smoked Salmon & Avocado Salad",
    "A light salad with smoked salmon, creamy avocado, mixed greens, cucumber, and a lemon-dill vinaigrette."
  );
  createDish(
    "starter",
    "Stuffed Mushrooms",
    "Button mushrooms filled with a blend of cream cheese, garlic, spinach, and herbs, baked to perfection."
  );

  createCourse("main");
  createDish(
    "main",
    "Pan-Seared Salmon",
    "Fresh salmon fillet, seared to crispy perfection, served with a citrus beurre blanc, roasted baby potatoes, and sautéed green beans."
  );
  createDish(
    "main",
    "Grilled Chicken Marsala",
    "Tender chicken breast grilled and topped with a rich Marsala wine sauce, served with creamy mashed potatoes and roasted carrots."
  );
  createDish(
    "main",
    "Vegetable Risotto",
    "A creamy risotto made with seasonal vegetables, Parmesan, and a hint of white wine, garnished with fresh parsley."
  );

  createCourse("dessert");
  createDish(
    "dessert",
    "Chocolate Lava Cake",
    "Warm, gooey chocolate cake served with vanilla ice cream and fresh berries."
  );
  createDish(
    "dessert",
    "Lemon Cheesecake",
    "A smooth, tangy cheesecake on a graham cracker crust, topped with a zesty lemon curd."
  );
  createDish(
    "dessert",
    "Crème Brûlée",
    "A rich vanilla custard topped with a crispy caramelized sugar crust."
  );
  content.appendChild(createDiv());
  content.lastChild.classList.add("attribute");

  createAttribute();
}
