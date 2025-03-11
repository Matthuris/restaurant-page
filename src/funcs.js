export {
  createDiv,
  createText,
  createLink,
  createPara,
  createUl,
  createLi,
  createBtn,
  createAttribute,
  content,
};

const createDiv = () => {
  return document.createElement("div");
};
const createText = (text) => {
  return document.createTextNode(text);
};
const createLink = (href, text) => {
  let link = document.createElement("a");
  let txt = document.createTextNode(text);
  link.href = href;
  link.appendChild(txt);
  return link;
};
const createPara = () => {
  return document.createElement("p");
};
const createUl = () => {
  return document.createElement("ul");
};
const createLi = () => {
  return document.createElement("li");
};

const createBtn = () => {
  return document.createElement("button");
};

const createAttribute = () => {
  const attribute = document.querySelector(".attribute");
  attribute.appendChild(createText("Photo by "));
  attribute.appendChild(
    createLink(
      "https://unsplash.com/@brookelark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      "Brooke Lark"
    )
  );
  attribute.appendChild(createText(" on "));
  attribute.appendChild(
    createLink(
      "https://unsplash.com/photos/variety-of-sliced-fruits-08bOYnH_r_E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      "Unsplash"
    )
  );
};

const content = document.querySelector("#content");
