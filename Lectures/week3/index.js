/**
 * Week 3 focuses on functions and events.
 *
 * @category    Week 3
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.02.04
 **/

let points = 0;

// Wrong Answer Function
function wrongAnswer( )
{
    console.log( "WRONG!" );
    points--;
}

// Correct Answer Function
function correctAnswer( )
{
    console.log( "CORRECT!" );
    points++;
}

// TODO : Can this be optimized better for less copy & paste!
// Setup Question 1
let button2 = document.getElementById("q1a2");
let button3 = document.getElementById("q1a3");
let button4 = document.getElementById("q1a4");

button2.addEventListener( "click", correctAnswer );
button3.addEventListener( "click", wrongAnswer );
button4.addEventListener( "click", wrongAnswer );

// Setup Question 2
let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");
let q2a3 = document.getElementById("q2a3");
let q2a4 = document.getElementById("q2a4");

q2a1.addEventListener( "click", correctAnswer );
q2a2.addEventListener( "click", wrongAnswer );
q2a3.addEventListener( "click", wrongAnswer );
q2a4.addEventListener( "click", wrongAnswer );