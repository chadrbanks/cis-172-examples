/**
 * Week 4 - JavaScript Objects
 *
 * @category    Week 4
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.02.11
 **/

var fridge = [];

let sayHello = function()
{
    console.log("Hello world!");
};
//sayHello();

function sayPrice( price )
{
    console.log('This dish will cost $' + price);
}
//sayPrice(4.99);

function cookDish()
{
    console.log("Cooking new dish...");

    let dishNameBox = document.getElementById("dishName");
    let dishTypeBox = document.getElementById("dishType");
    let dishPriceBox = document.getElementById("dishPrice");

    //let newObject = {};
    let newDish =
    {
        name:       dishNameBox.value,
        type:       dishTypeBox.value,
        price:      dishPriceBox.value,
        amount:     100,
        sayHello:   sayHello,
        sayPrice:   sayPrice    
    };
    //newDish.sayHello();
    newDish.sayPrice( newDish.price );

    fridge.push(newDish);

    console.log("Fridge:", fridge);
}

let cookFoodBtn = document.getElementById("Cook");
cookFoodBtn.addEventListener( "click", cookDish );

