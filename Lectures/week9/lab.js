/**
 * Week 9 - Homework Lab
 *
 * @category    Week 9
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.04.02
 **/


let myObject = {

    debugButton : null,

    init : function()
    {
        myObject.debugButton = document.getElementById('debugButton');
        myObject.debugButton.addEventListener("click", myObject.checkDate );
        console.log( "button:", myObject.debugButton );
    },
    checkDate : function()
    {
        console.log("Clicked!");
    }

};


window.onload = myObject.init;


















