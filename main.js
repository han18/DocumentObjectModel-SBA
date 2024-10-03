// SBA 316: The Document Object Model Project

"use strict";
// to test if the file is connected and console logging 
console.log("testing"); 


let menuLinks = [
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
});
