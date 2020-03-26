/**
 * Week 8 - Catch Up Example
 *
 * @category    Week 8
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.03.26
 **/
let week8 = {

    init: function (){
        let myBtn = document.getElementById('bgcolor');
        myBtn.addEventListener( 'click', week8.updateColor )
    },
    updateColor: function (  )
    {
        var bodyElement = document.body;

        if( bodyElement.style.backgroundColor === "white" )
        {
            bodyElement.style.backgroundColor = "red";
        }
        else if( bodyElement.style.backgroundColor === "red" )
        {
            bodyElement.style.backgroundColor = "blue";
        }
        else if( bodyElement.style.backgroundColor === "blue" )
        {
            bodyElement.style.backgroundColor = "green";
        }
        else
        {
            bodyElement.style.backgroundColor = "white";
        }
    }
};

window.onload = week8.init;