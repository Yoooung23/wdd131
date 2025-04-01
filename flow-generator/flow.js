import { loadData, generateCard } from './func-i-town.js';

let thirtyMinSelected = false; // Correctly declare the variable

document.addEventListener("DOMContentLoaded", async () => {
    const filterBtn = document.getElementById("filter-btn");
    const filterPanel = document.getElementById("filter-panel");

    filterBtn.addEventListener("click", function () {
        filterPanel.classList.toggle("active");
    });

    const choice30 = document.getElementById('btn-30');
    choice30.addEventListener('click', () => {
        thirtyMinSelected = true; // Set to true for 30 min
        console.log("30 min selected:", thirtyMinSelected);
    });

    const choice60 = document.getElementById('btn-60'); // Assuming there's a button for 60 min
    choice60.addEventListener('click', () => {
        thirtyMinSelected = false; // Set to false for 60 min
        console.log("60 min selected:", thirtyMinSelected);
    });

    let data = await loadData('data.json');
    let thirtyMinWorkList = data.filter(item => item.tag === 30);
    let sixtyMinWorkList = data.filter(item => item.tag === 60);

    console.log("30 min work list:", thirtyMinWorkList);
    console.log("60 min work list:", sixtyMinWorkList);

    let selectedList; // Declare with let for reassignment
    if (thirtyMinSelected) {
        selectedList = thirtyMinWorkList; // Use the correct variable name
    } else {
        selectedList = sixtyMinWorkList; // Use the correct variable name
    }

    console.log("Selected list:", selectedList);

    if (data) {
        const generateButton = document.getElementById('generate-btn');
        generateButton.addEventListener('click', () => {
            generateCard(selectedList);
        });
    }
});