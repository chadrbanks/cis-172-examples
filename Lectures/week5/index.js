/**
 * Week 5 focuses on the DOM.
 *
 * @category    Week 5
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.02.18
 **/
let week5 = {

    myDiv: null,
    myHoverBtn: null,

    init: function (){
        week5.myDiv = document.getElementById('display');

        week5.myHoverBtn = document.getElementById('hover');
        week5.myHoverBtn.addEventListener("mouseover", week5.handleHover );
        week5.myHoverBtn.addEventListener("click", week5.handleClick );
    },
    handleClick: function ()
    {
        week5.updateDiv( "click" );
    },
    handleHover: function ()
    {
        week5.updateDiv( "hover" );
    },
    updateDiv: function ( str )
    {
        week5.myDiv.innerHTML = "<p>You did a " + str + "!</p>" + week5.myDiv.innerHTML;
    }
};

window.onload = week5.init;