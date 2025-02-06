const menuButton = document.querySelector("button.menu");
const menuItems = document.querySelector(".menu_items");
function toggleMenu() {
  menuItems.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);
console.log("click")

// devider

function handleResize() {
    if (window.innerWidth > 1000) {
      menuButton.classList.add("hide"); // Hide button on large screens
      menuItems.classList.remove("hide"); // Show menu items
    } else {
      menuButton.classList.remove("hide"); // Show button on small screens
      menuItems.classList.add("hide"); // Hide menu items
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);

// mine 
// const close = document.querySelector()
// mine
  

// devider


// function viewertemplate(path, text){
//     let html = `
//         <img src="{path}" alt="{text}"></img>`;
//     return html; 
// }
// function viewHandler() {

//     let body = document.querySelector("body");
//     let html = viewerTemplate('review-icon.png', 'Review Image');

//     body.insertAdjacentHTML('afterend',html)
// }
// let btn = document.querySelector("button");
// btn.addEventListener("click", viewHandler);


// AI's gift:

function viewerTemplate(imagePath, altText) {
  return `
    <div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${imagePath}" alt="${altText}">
    </div>
  `;
}

function viewHandler(event) {
  const clickedImage = event.target;

  // Extract the filename from the image source
  const filename = clickedImage.src.split('/').pop().split('.')[0]; 

  const fullImagePath = 'images/' + filename + '-full.jpg'; 

  document.body.insertAdjacentHTML('afterbegin', viewerTemplate(fullImagePath, clickedImage.alt));

  const closeButton = document.querySelector('.close-viewer');
  closeButton.addEventListener('click', closeViewer);
}

function closeViewer() {
  const viewer = document.querySelector('.viewer');
  viewer.remove(".vanish");
}

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);





const viewImg = document.querySelector(".viewer");
function toggleMenu() {
  viewer.classList.toggle("vanish");
}

menuButton.addEventListener("click", toggleMenu);
console.log("click")













// let img = document.querySelector("img");
// let filename = img.getAttribute('src');
// console.log(parts[1]);

// let parts = filename.split("-");
// console.log('img' + parts[1] + '.jpg');

// let newPara = "<p>This is a new paragraph</p>";

// img.insertAdjacentHTML("afterend", newPara);


/* funtion inside a function*/

window.addEventListener("click", function (event) {
let modal = document.querySelector('.viewer');
// close the modal when user clicks outside of the image
if (event.target === modal) {
modal.remove();
}
});

// allow the escape key to close the modal as well
window.addEventListener("keydown", function (event) {
let modal = document.querySelector('.viewer');
if (event.key === "Escape") {
modal.remove();
}
});