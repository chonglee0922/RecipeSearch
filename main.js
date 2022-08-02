const apiData1 = {
    url: "https://api.spoonacular.com/recipes/",
    findBy: "findByIngredients?ingredients=",
    ingredients: "",
    apiKey: "&apiKey=2c95ce6156a248b08e61bcc20f220575"
};

const apiData2 = {
    url: "https://api.spoonacular.com/recipes/",
    recipeID: "",
    etc: "/information?includeNutrition=false",
    apiKey: "&apiKey=2c95ce6156a248b08e61bcc20f220575"
};

const dish_list = document.querySelector(".dishList");
const dish_info = document.querySelector(".dishInfo");

function firstAPIcall() {
     let ingr = document.getElementById("input").value;
     apiData1.ingredients = String(ingr);
     console.log(ingr); 

     const {url, findBy, ingredients, apiKey} = apiData1;
     const apiURL = `${url}${findBy}${ingredients}${apiKey}`;
     apiData1.ingredients = "";
     console.log(apiURL);
     console.log(apiData1.ingredients);

     fetch(apiURL)
        .then(response => response.json())
        .then((data1) => {
            for (let i = 0; i < data1.length; i++) {
                let newListElement = document.createElement("li");
                let dishName = document.createElement("p");
                dishName.setAttribute("target", "_blank");
                //dishName.addEventListener("click", function() {secondAPIcall(data[i].id);});
                dishName.textContent = data1[i].title;
                newListElement.appendChild(dishName);
                dish_list.appendChild(newListElement);
            }
        })
}
