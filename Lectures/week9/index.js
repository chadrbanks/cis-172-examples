/**
 * Week 9 - Validating Form Data
 *
 * @category    Week 9
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.03.31
 **/

let contactFormValidator = {

    contactForm : null,
    isValid : false,

    init: function (){
        console.log('Page loaded!');

        let contactName = document.getElementById('contactName');
        contactName.addEventListener( "blur", contactFormValidator.validateName );

        contactFormValidator.contactForm = document.getElementById('contactForm');
        contactFormValidator.contactForm.addEventListener( "submit", contactFormValidator.validateForm );
        console.log("Form:", contactFormValidator.contactForm);
    },
    validateName : function( event )
    {
        let nameInput = document.getElementById('contactName');

        //console.log("Event:", event);
        //console.log("Value Length:", event.target.value.length);

        if(nameInput.value.length < 3)
        {
            // Fire error message here
            // Example: console.error
            // Example: Try/Catch -> throw new error('validation')
            // Example: alert('validation error!');
            // Example: Custom modal or pop-up (preferred)
            alert('Name should be longer than 2 characters!');

            return false;
        }

        let spaceIndex = nameInput.value.indexOf(" ");
        //let s3Index = nameInput.value.indexOf("   ");

        if( spaceIndex === -1 )
        {
            alert('No space error, name should be a full name!');

            return false;
        }

        return true;

    },
    validateForm : function(event)
    {
        event.preventDefault();

        // Do ALL validation
        let isValid = true;

        if( !contactFormValidator.validateName() )
        {
            isValid = false;
        }

        // New validations

        if( isValid )
        {
            contactFormValidator.contactForm.submit();
        }
    }
};


window.onload = contactFormValidator.init;