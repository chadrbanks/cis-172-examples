/**
 * Week 4 focuses on food objects.
 *
 * @category    Week 4
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.02.11
 **/

let fridge = [];

let sayHello = function()
{
    console.log("Hello world!");
};

function cookDish()
{
    console.log("Cooking new dish.");

    let dishNameBox = document.getElementById("dishName");
    let dishTypeBox = document.getElementById("dishType");
    let dishPriceBox = document.getElementById("dishPrice");

    let newDish =
    {
        name:       dishNameBox.value,
        type:       dishTypeBox.value,
        price:      dishPriceBox.value,
        amount:     100,
        sayHello:   sayHello
    };

    fridge.push(newDish);

    console.log("Fridge:", fridge);
}

let cookFoodBtn = document.getElementById("Cook");
cookFoodBtn.addEventListener( "click", cookDish );

