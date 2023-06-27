//fetch function

const url = "https://www.thecocktaildb.com/api/json/v1/1/";
const drinkURL = "/random.php"
const alcoholic = "/filter.php?a=Alcoholic"
const nonalcoholic = "/filter.php?a=Non_Alcoholic"

function allDrinks(drinkURL) {
    return fetch(drinkURL)
      .then(response => response.json())
      .then(data => data.drinks[0].strDrinkThumb); //extract img src 
}


//initializers

allDrinks(url + `/random.php`).then((drinksArray) => {
    //render all drinks)
console.log(drinksArray)
});

//dom selectors
const fetchButton = document.querySelector("button")
const hoverButton = document.querySelector("button")
const drinkImage = document.querySelector("img")
const cocktailDetails = document.querySelector(".cocktailDetails")


//event listeners
hoverButton.addEventListener("mouseover", (event) => {
    hoverButton.style.color = "red";
  });
  
  hoverButton.addEventListener("mouseout", (event) => {
    hoverButton.style.color = "white";
  });

  fetchButton.addEventListener("click", (event) => {
    allDrinks(url + "/random.php").then(drinksArray => {
    renderRandomDrink(drinkSource);
     // console.log(drinksArray)
    })
  })








//render functions
const drinkDescription = document.querySelector(".")
function renderRandomDrink(drinkObj) {

  drinkImage.src = drinkObj;
  drinkDescription.textContent = ""
}


//{
//    "ID": 2,
//   "Drink Name": "Old Fashioned",
//   "Image URL": "https://www.knobcreek.com/sites/default/files/2018-06/thumb__0010_8909_KC_Classic_Old_Fashioned-4474.jpg",
//  "Description": "An Old Fashioned is a classic sweet whiskey cocktail",
 //   "List of ingredients": "bourbon, bitters, raw sugar, cherry garnish"
  //},
