const recipes = [];

//Declared index of the recipe to be edited
var indexOfRecipeToBeEdited = -1

// Declared a flag to set the edit mode
var isEditMode = false

// Update a recipe when the "Add Recipe" button is clicked
// If the recipe is new, then add the recipe to the recipes array 
// Use addRecipes() function to add the new recipe
// Else edit the recipe in the recipes array
// Clear the form's input fields using the clearInputFields() function
// Finally, display the recipes using the displayRecipes() function
document.getElementById('add-recipe-btn').addEventListener('click', function() {
    // Write your code here for task 1
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;


    // if in edit mode and indexOfRecipeToBeEdited is greater than -1, edit recipe
    if (isEditMode && indexOfRecipeToBeEdited > -1) {
        recipes[indexOfRecipeToBeEdited] = {
            title: title,
            ingredients: ingredients.split(','),  // split ingredients by comma
            instructions: instructions
        };
        isEditMode = false;
        indexOfRecipeToBeEdited = -1; // reset the index
    } else {
        // otherwise add new recipe
        const newRecipe = {
            title: title,
            ingredients: ingredients.split(','),
            instructions: instructions
        };
        addRecipe(newRecipe);
    }

    // Clear input fields and display updated recipes
    clearInputFields();
    displayRecipes();
});

// Clear the form's input fields
function clearInputFields() {
    // Write your code here for task 2
    document.getElementById('title').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
}

// Add the new recipe to the recipes array
function addRecipe(recipe) {
    // Write your code here for task 3
    recipes.push(recipe);
}

// Display Recipes
function displayRecipes() {
    // Write your code here for task 4
    const recipeList = document.getElementById('recipes');
    recipeList.innerHTML = '';
    recipes.forEach(function(recipe, index) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${recipe.title}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <button onclick="editRecipe(${index})">Edit</button>  <!-- Edit Button -->
            <button onclick="deleteRecipe(${index})">Delete</button> <!-- Delete Button -->`;
        recipeList.appendChild(listItem);
    });
};

// Edit the recipe object when the Edit button is clicked
function editRecipe(index) {
    // Write your code here for task 5
    const recipe = recipes[index] 
    document.getElementById('title').value = recipe.title;
    document.getElementById('ingredients').value = recipe.ingredients.join(',');
    document.getElementById('instructions').value = recipe.instructions;

    isEditMode = true;
    indexOfRecipeToBeEdited = index; 
}

// Delete the recipe object when the Delete button is clicked
function deleteRecipe(index){
    if (index >= 0 && index < recipes.length) {
        recipes.splice(index, 1); // Remove 1 element at the specified index
        displayRecipes();
        console.log(recipes)
        clearInputFields();
        isEditMode = false;
    }
}