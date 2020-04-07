/**
 * Week 10 - jQuery
 *
 * @category    Week 10
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.04.07
 * 
 **/

let week10 = {

    hiddenDiv : null,
    isHidden : true,

    init: function (){

        console.log( "Page has loaded!" );

        // Non-jQuery way to select element
        let div = document.getElementById('myDiv');
        console.log("myDiv:", div);

        // Select same div using jQuery
        week10.hiddenDiv = $( '#myDiv' );
        week10.hiddenDiv.append('<p>Another line of text!</p>');
        week10.hiddenDiv.hide();
        // $( '#myDiv' ).append('<p>Another line of text!</p>').hide();

        // Adding event listeners to buttons
        let toggleButton = $('#toggleButton');
        toggleButton.click( week10.onReturnButtonClick );

        $('#fadeButton').click( week10.onFadeButtonClick );
        //$('#fadeButton').on( "click", week10.onFadeButtonClick );
    },
    onReturnButtonClick : function( event )
    {
        if(week10.isHidden)
        {
            week10.hiddenDiv.show();
            week10.isHidden = false;
        }
        else
        {
            week10.hiddenDiv.hide();
            week10.isHidden = true;
        }
    },
    onFadeButtonClick : function()
    {
        console.log('Fading....');

        if(week10.isHidden)
        {
            week10.hiddenDiv.fadeIn(1000);
            week10.isHidden = false;

            //let options = {duration:3000,easing:'linear'};
            //week10.hiddenDiv.fadeIn( options );
        }
        else
        {
            week10.hiddenDiv.fadeOut(3000);
            week10.isHidden = true;
        }
    }
};


window.onload = week10.init;
