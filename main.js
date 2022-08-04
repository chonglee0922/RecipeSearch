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
const dish_info = document.querySelector(".info");
const placeholder_left = document.querySelector(".placeholderLeft");
const placeholder_right = document.querySelector(".placeholderRight");

function firstAPIcall() {
    dish_list.innerHTML = "";
    dish_info.innerHTML = "";
    placeholder_left.innerText = "Choose a dish from below!";
    placeholder_right.innerHTML = "";
    placeholder_right.innerText = "Choose a dish!";
    let ingr = document.getElementById("input").value;
    apiData1.ingredients = String(ingr);
    //console.log(ingr); 

    const {url, findBy, ingredients, apiKey} = apiData1;
    const apiURL1 = `${url}${findBy}${ingredients}${apiKey}`;
    apiData1.ingredients = "";
    //console.log(apiURL1);
    //console.log(apiData1.ingredients);

    fetch(apiURL1)
    .then(response => response.json())
    .then((data1) => {
        if (data1.length == 0) {
            placeholder_left.innerText = "There are no dishes with the entered ingredients!"
        } else {
            for (let i = 0; i < data1.length; i++) {
                let newListElement = document.createElement("li");
                let dishName = document.createElement("p");
                dishName.setAttribute("target", "_blank");
                dishName.addEventListener("click", function() {secondAPIcall(data1[i].id);});
                dishName.textContent = data1[i].title;
                newListElement.appendChild(dishName);
                dish_list.appendChild(newListElement);
            }
        }
    })
}

function secondAPIcall(dishID) {
    dish_info.innerHTML = "";
    document.querySelector(".placeholderRight").textContent = "More Information Below!";
    apiData2.recipeID = String(dishID);
    //console.log(apiData2.recipeID);

    const {url, recipeID, etc, apiKey} = apiData2;
    const apiURL2 = `${url}${recipeID}${etc}${apiKey}`;
    apiData2.recipeID = "";
    //console.log(apiURL2);
    //console.log(apiData2.recipeID);

    fetch(apiURL2)
    .then(response => response.json())
    .then((data2) => {

        let dishName = document.createElement("h4");
        let dishPicture = document.createElement("img");
        let ingredients = document.createElement("p");
        let readyIn = document.createElement("p");
        let link = document.createElement("a");
        
        dishName.textContent = data2.title;
        dishPicture.setAttribute("src", data2.image);
        dishPicture.setAttribute("alt", data2.title);
        ingredients.textContent = "Ingredients: ";
        readyIn.textContent = "Ready In: "+String(data2.readyInMinutes)+" Minutes";
        link.setAttribute("href", data2.sourceUrl);
        link.textContent = "Link To Full Recipe Instructions"
        link.setAttribute("target", "_blank");

        for (let i = 0; i < data2.extendedIngredients.length; i++) {
            let ingredient = data2.extendedIngredients[i].name;
            if (i != 0) {
                ingredients.innerText += ", ";
            }
            console.log(ingredient);
            ingredients.innerText += ingredient;
        }

        /*
        console.log(dishName.textContent);
        console.log(dishPicture.innerHTML);
        console.log(ingredients.textContent);
        console.log(readyIn.textContent);
        console.log(link.textContent);
        */

        dish_info.appendChild(dishName);
        dish_info.appendChild(dishPicture);
        dish_info.appendChild(ingredients);
        dish_info.appendChild(readyIn);
        dish_info.appendChild(link);
    })
}
