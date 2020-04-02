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
    checkDate : function() {
        try {
            console.log("Clicked!");

            // Done some other stuff

            let errorMessage = '<span style="color:red;">Sorry, an error occurred!</span>';

            let myDate = new Date();
            console.log('myDate:', myDate);
            console.log('Month:', myDate.getMonth());
        }
        catch(e)
        {
            console.error(e);
        }
    },
    func2 : function() {
        try {
            // Code....
        }
        catch(e)
        {
            console.error(e);
        }
    },
    func3 : function()
    {
        try {
            // Code...
        }
        catch(e)
        {
            console.error(e);
        }
    }

};


window.onload = myObject.init;





