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
