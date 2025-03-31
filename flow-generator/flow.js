document.addEventListener("DOMContentLoaded", function () {
    const filterBtn = document.getElementById("filter-btn");
    const filterPanel = document.getElementById("filter-panel");

    filterBtn.addEventListener("click", function () {
        filterPanel.classList.toggle("active");
    });
});


let msg = "Script ran.";
console.log(msg);