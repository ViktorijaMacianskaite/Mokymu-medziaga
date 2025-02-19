document.addEventListener("DOMContentLoaded", function () {
  
    let recipeCards = document.querySelectorAll(".recipe-card");
    let slider = document.querySelector("input[type='range']");
    let portionText = document.querySelector(".portion-container p");
    let ingredients = document.querySelectorAll(".ingredients-container div span");

    
    let recipes = {
        "Vištiena su salotom": { "Vištiena": 200, "Salotos": 100, "Alyvuogių aliejus": 10 },
        "Tortas su mėlynėmis": { "Miltai": 500, "Kiaušiniai": 2, "Mėlynės": 100, "Cukrus": 2 },
        "Makaronai su mėsa": { "Makaronai": 250, "Malta mėsa": 150, "Pomidorų padažas": 100 }
    };

    let selectedRecipe = "Tortas su mėlynėmis"; 
    function updateIngredients(portions) {
        let recipe = recipes[selectedRecipe];
        let ingredientContainer = document.querySelector(".ingredients-container");

     
        ingredientContainer.innerHTML = `<h3>Jums reikės šių ingredientų, tokiais kiekiais:</h3>`;


        Object.keys(recipe).forEach(ingredient => {
            let amount = recipe[ingredient] * portions;
            let unit = "g";

            if (ingredient.includes("Kiaušiniai")) {
                unit = "vnt.";
            } else if (ingredient.includes("Cukrus") || ingredient.includes("Alyvuogių aliejus")) {
                unit = "šaukšteliai";
            }

            ingredientContainer.innerHTML += `<div>${ingredient}: <span>${amount} ${unit}</span></div>`;
        });
    }

    recipeCards.forEach(card => {
        card.addEventListener("click", function () {
            recipeCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");

            selectedRecipe = card.querySelector("h3").textContent;

            updateIngredients(slider.value);
        });
    });

    slider.addEventListener("input", function () {
        portionText.textContent = slider.value;
        updateIngredients(slider.value);
    });
    updateIngredients(1);
});


