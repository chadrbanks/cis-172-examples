/**
 * Week 10 - Persistence
 *
 * @category    Week 11
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.04.14
 * @link        https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * 
 **/


let week11 = {

    init: function ()
    {
        // COOKIE STUFF
        // console.log("CM:", cookieManager);
        let cookies = cookieManager.getCookies();

        cookieManager.setCookie("email", "cbanks1@hfcc.edu", 365);


        // LOCAL STORAGE STUFF
        let bgcolor = localStorage.getItem('background-color');
        console.log("bgcolor:", bgcolor);

        if(!bgcolor)
            localStorage.setItem( "background-color", "white" );

        $('body').css("background-color", bgcolor);

        // TODO : Update select box to correct value on page load
        $('#bgcolor').value = bgcolor;

        let selectBox = document.getElementById('bgcolor');
        selectBox.addEventListener('change', week11.updateColor);


        // DATA STUFF (NOT AS PERSISTENT)
        let div = $('#myDiv');
        let myData = div.data();
        console.log("myDiv Data:", myData);
        console.log("Movie:", myData.movie);
        div.append(myData.movie);

        div.attr("data-cheese", "Provolone");
        console.log("div:", div)
    },
    updateColor : function(event)
    {
        // Save The Value
        let sb = event.target;
        localStorage.setItem( "background-color", sb.value );

        // Perform Update
        $('body').css("background-color", sb.value);
    }
};


window.onload = week11.init;
