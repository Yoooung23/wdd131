const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

// devider

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);

// let img = document.querySelector("img");
// let filename = img.getAttribute('src');
// console.log(parts[1]);

// let parts = filename.split("-");
// console.log('img' + parts[1] + '.jpg');

// let newPara = "<p>This is a new paragraph</p>";

// img.insertAdjacentHTML("afterend", newPara);


/* funtion inside a function*/

// devider
function viewertemplate(path, text){
    let html = `
        <img src="{path}" alt="{text}"></img>`;
    return html; 
}
function viewHandler() {

    let body = document.querySelector("body");
    let html = viewerTemplate('review-icon.png', 'Reciew Image');

    body.insertAdjacentHTML('afterend',html)
}
let btn = document.querySelector("button");
btn.addEventListener("click", viewHandler);