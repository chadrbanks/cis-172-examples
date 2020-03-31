/**
 * Week 9 - Validating Form Data
 *
 * @category    Week 9
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.03.31
 **/

let contactFormValidator = {

    init: function (){
        console.log('Page loaded!');

        let contactName = document.getElementById('contactName');
        contactName.addEventListener( "blur", contactFormValidator.validateName );
    },
    validateName : function( event )
    {
        console.log("Event:", event);
        console.log("Value?:", event.target.value);

        
    }
};

window.onload = contactFormValidator.init;