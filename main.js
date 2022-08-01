const apiData1 = {
    url: "https://api.spoonacular.com/recipes/",
    findBy: "findByIngredients?ingredients=",
    ingredients: "",
    apiKey: "&apiKey=2c95ce6156a248b08e61bcc20f220575"
}

const apiData2 = {
    url: "https://api.spoonacular.com/recipes/",
    recipeID: "",
    etc: "/information?includeNutrition=false",
    apiKey: "&apiKey=2c95ce6156a248b08e61bcc20f220575"
}

function apiFirstCall() {
     let ingr = document.getElementById("input").value;
     apiData1.ingredients = String(ingr);
     console.log(ingr); 

     const {url, findBy, ingredients, apiKey} = apiData1;
     const apiURL = `${url}${findBy}${ingredients}${apiKey}`;
     apiData1.ingredients = "";
     console.log(apiURL);
     console.log(apiData1.ingredients);
}


