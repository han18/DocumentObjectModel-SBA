// SBA 316: The Document Object Model Project

"use strict";
// to test if the file is connected and console logging
console.log("testing");

let menuLinks = [
  { text: "home", href: "/home" },
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "gallery", href: "/ gallery" },
  { text: "account", href: "/account" },
];

// calling the menu bar.. id in the html
const navMenu = document.getElementById("menu");
navMenu.style.height = "100%";
navMenu.style.backgroundColor = "#0f496b4d";
navMenu.classList.add("flex-around");

// creating an anchor element for the navbar
for (let x = 0; x < menuLinks.length; x++) {
  // creating new element a tag into the nav menu
  const aLink = document.createElement("a");
  aLink.setAttribute("href", menuLinks[x].href);
  aLink.innerHTML = menuLinks[x].text;
  navMenu.appendChild(aLink);
  navMenu.firstElementChild.style.color = "red";
}

// console.log(aLink)
// =============== here is the form validation part

// validating the form and clearing the input fields
let output = document.querySelector(".message-output");
const formReset = document.getElementById("form-validation");
formReset.addEventListener("submit", (e) => {
  e.preventDefault();
  formReset.reset();
  output.innerHTML += "Form Submitted Successfully!";

  output.innerHTML +=
    '<iframe src="https://giphy.com/embed/H2suj8GiLsEdk9W525" width="480" height="271" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/abcnetwork-shark-tank-H2suj8GiLsEdk9W525">via GIPHY</a></p>';
});

const footerUl = document.getElementById("ul-footer");
const gardens = ["The New York Botanical Garden", "Brooklyn Botanical Garden", "Chicago Botanical Garden", "Florida Botanical Garden"];

const fragment = new DocumentFragment();

for (const x of gardens) {
    const li = document.createElement("li");
    li.textContent = x;
    fragment.append(li);
  }
  
  footerUl.append(fragment);
  footerUl.style.color = "white";
//   footerUl.classList.add("flexbox");

const footerText = document.querySelector(".footer-text");

footerText.addEventListener("click", () => {
footerText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
footerText.style.color = "#bdc3c7";



})
