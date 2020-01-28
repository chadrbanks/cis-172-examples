

// String Stuff
let myName = "Rick";
let myMovie = "The Matrix bae8fbud8afbgu8aidfbuiasdf";
let myColor = "Red";
let myFood = "Pizza";
let myNumber = 42;
let myArray = [1,4,7];

let myFavoriteThings =
    [
        myArray,
        myNumber,
        myName,
        myMovie,
        myColor,
        myFood
    ];

// console.log("myName:", myName);
// console.log("myMovie:", myMovie);
// console.log("myFavoriteThings:", myFavoriteThings);

let movieWithoutThe = myMovie.substr(4, 6);

let mySentance =
"I am "+myName+", my fav movie is The " + movieWithoutThe + ".";

// console.log( mySentance );




// If / Else If / Else Stuff
let subTotal = 249.99;
console.log("SubTotal: $", subTotal);

if( subTotal >= 150 )
{
    let currentDate = new Date();
    if( currentDate.getDay() === 2 )
    {
        console.log("You got a 30% discount!");
    }
    else
    {
        console.log("You got a 20% discount!");
    }
}
else if( subTotal >= 50 )
{
    console.log("You got a 10% discount!");
}
else
{
    console.log("You get no discount today.");
}

if(subTotal > 1000)
    console.log("You get a big spender discount!");



// For Loops
let c;
for(c = 0; c <= 5; c++ )
{
    console.log("c:", c);
}

for( let i in myFavoriteThings )
{
    console.log( myFavoriteThings[i] );
}



// While
// let counter = 5;
// while( counter > 0 )
// {
//     console.log("Counter:", counter);
// }
