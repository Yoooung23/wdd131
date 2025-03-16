import recipes from './recipes.mjs';

function displayRecipes() {
    const recipeContainer = document.getElementById('recipe-container');

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        const tags = recipe.tags.join(', ');
        const ingredientsList = recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('');

        recipeDiv.innerHTML = `
            <div class="recipe-info">
                <div class="image-container">
                    <img src="${recipe.image}" alt="${recipe.name}">
                </div>
                <div class="details">
                    <h2>${recipe.name}</h2>
                    <p class="tags"><strong>Tags:</strong> ${tags}</p>
                    <p class="description">${recipe.description}</p>
                    <h3>Ingredients:</h3>
                    <ul class="ingredients">
                        ${ingredientsList}
                    </ul>
                </div>
            </div>
        `;

        recipeContainer.appendChild(recipeDiv);
    });
}

displayRecipes();
// I dont know if this is the best way to do it, but it works for me.
