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
        //onsole.log("CM:", cookieManager);
        //document.cookie = "username=ProfBanks";
        let cookies = cookieManager.getCookies();

        cookieManager.setCookie("email", "cbanks1@hfcc.edu", 365);
        //setCookie("MyCookie", "42", 30);
        //setCookie("username", "ProfBanks", 365);

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
