const recipe = [
    {
        id: 1,
        imgSrc: "https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21.jpg",
        imgAlt: "Cover image of Alfredo Noodles with Chicken",
        title: "Chicken Alfredo",
        stars: "⭐⭐⭐⭐⭐",
        description: "Boil some noodles. Use an alfredo seasoning packet to craft a sauce. Cook and chop some chicken. You are ready to go!"
    },
    {
        id: 2,
        imgSrc: "https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21.jpg",
        imgAlt: "Enchiladas",
        title: "Chicken Alfredo",
        stars: "⭐⭐⭐⭐⭐",
        description: "Boil some noodles. Use an alfredo seasoning packet to craft a sauce. Cook and chop some chicken. You are ready to go!"
    }

];

function displayRecipes() {
    const recipeContainer = document.getElementById('recipe-container');

    recipe.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        recipeDiv.innerHTML = `
            <div class="recipe-info">
                <div class="image-container">
                    <img src="${recipe.imgSrc}" alt="${recipe.imgAlt}">
                </div>
                <div class="details">
                    <h2>${recipe.title}</h2>
                    <p class="stars">${recipe.stars}</p>
                    <p>${recipe.description}</p>
                </div>
            </div>
        `;

        recipeContainer.appendChild(recipeDiv);
    });
}
displayRecipes();