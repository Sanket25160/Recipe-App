// const body = document.querySelector("body");
// const searchBar = document.querySelector(".searchBar");
// const searchButton = document.querySelector(".searchBtn");
// const displayContainer = document.querySelector(".display-container");
// const recipeDetailsContent = document.querySelector(".recipe-details-content");
// const recipeContainer = document.querySelector(".recipe-details");
// const displayInfo = document.querySelector(".display-info");
// const categories = document.querySelectorAll(".categories");

// const fetchApi = async (query)=>{
//     displayContainer.innerHTML = "<p>Searching for recipes...</p>";
//     const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//     const response = await data.json();
//     displayContainer.innerHTML = "";

//     if(!response.meals){
//         displayContainer.innerHTML = "<p>No recipes found. Please try again.</p>";
//         return;
//     }
//     response.meals.forEach(meal=>{
//         const recipeDiv = document.createElement('div');
//         recipeDiv.classList.add("recipe");
//         recipeDiv.innerHTML = `
//         <img src = "${meal.strMealThumb}">
//         <h3>${meal.strMeal}</h3>
//         <p>${meal.strCategory}</p>
//         <p>${meal.strArea}</p>
//         `

//         const button = document.createElement('button');
//         button.textContent = "View Recipe";

//         // Adding event listener to the button to show recipe details
//         // button.addEventListener('click', ()=>{
//         //     openRecipePopup(meal);
//         // })

//         recipeDiv.appendChild(button);
//         displayContainer.appendChild(recipeDiv);
//     })
// }

// const fetchIngredients = (meal)=>{
//     let ingredientsList = "";
//     for(let i=1; i<=20; i++){
//         const ingredient = meal[`strIngredient${i}`];
//         if(ingredient){
//             const measure = meal[`strMeasure${i}`];
//             ingredientsList += `<li>${measure} ${ingredient}</li>`;
//         }else{
//             break;
//         }
//     }
//     return ingredientsList;
// }

// const openRecipePopup = (meal)=>{
//     recipeContainer.innerHTML = `
//       <h2 class="recipe-name">${meal.strMeal}</h2>
//       <h3>>Ingredients:</h3>
//       <ul>${fetchIngredients(meal)}</ul>

//       <div>
//         <h3>Instructions:</h3>
//         <p class="recipe-instructions">${meal.strInstructions}</p>
//       </div>

//     `
//     recipeDetailsContent.parentElement.style.display = "block";
// }

// searchButton.addEventListener('click', (e)=>{
//     e.preventDefault();
//     const searchInput = searchBar.value.trim();
//     fetchApi(searchInput);
//     console.log("Button was clicked");
// })
