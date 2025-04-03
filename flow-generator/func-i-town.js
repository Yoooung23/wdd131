async function loadData (filepath) {
    const response = await fetch(filepath);
    const data = await response.json();
    return data;
}

function generateCard(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomData = data[randomIndex];

    const card = document.getElementById('card-content');
    card.innerHTML = `
        <H2>${randomData.title}</H2>
        <img src="${randomData.image}" alt="Yoga Position Icon">
        <h4>${randomData.time}</h4>
        <ul>${randomData.category}</ul>
    `;

}


export { loadData, generateCard };

