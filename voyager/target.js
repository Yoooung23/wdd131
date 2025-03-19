// const paragraph = document.getElementById("intro");

// console.log(paragraph);
// paragraph.style.backgroundColor = "#f2c556";

// const word = document.getElementsByTagName("em");

// word[0].style.backgroundColor = "#abcfcc";

// querySelector("p em").textcontent = "USS Voyager Starship";

// // let add = document.querySelector.createElement("img") = "https://bit.ly/3RfG4sY"
// // console.log(add)
const div = document.querySelector("#starship");
const img = document.createElement("img");
img.src = "https://bit.ly/3RfG4sY";
img.alt = "starship image";
img.id = "ship";
img.className = "rounded";
div.appendChild(img);


// document.addEventListener("DOMContentLoaded", () => {
//     const div = document.querySelector("#starship");
//     const img = document.createElement("img");
//     img.src = "https://bit.ly/3RfG4sY";
//     img.alt = "starship image";
//     div.appendChild(img);
//   });