/**
 * Week 9 - Homework Lab
 *
 * This is an example related to homework 4!
 *
 * @category    Week 9
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.04.02
 **/

var myObject = {


    init : function()
    {
        var debugButton = document.getElementById('myButton');
        debugButton.addEventListener("click", myObject.onnButtonClick );
    },
    onnButtonClick : function( event )
    {
        console.log('event:', event);
        var textBox = document.getElementById('myH1Text');
        var newText = textBox.value;
        var myH1 = document.getElementById('myH1');
        myH1.innerHTML = newText;
        // .append( STRING );
    }
};


window.onload = myObject.init;


// let event = {target:elemnt, };
// myObject.onnButtonClick( event );