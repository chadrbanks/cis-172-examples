/**
 * Week 6 - Debugging and Error Handling
 *
 * @category    Week 6
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.03.26
 **/

let myObj = {

    init : function()
    {
        let errorBtn = document.getElementById('err');
        errorBtn.addEventListener('click', myObj.createError)
    },
    createError : function()
    {
        console.log("createError function executed!");

        try {
            try {
                if (true)// Perform risky stuff here...
                {
                    //throw 'I broke!';
                    // let err = 'I broke';


                    throw new Error('I broke!');
                    // let err = {
                    //  message:"I broke",
                    //  element: {DOM}
                    //  stack: [
                    //      ....
                    //  ]
                    // };


                }

            } catch (err) {
                console.error("Error occured in myObj:", err);
                throw err;
            }
        }
        catch( e )
        {
            console.error("Site is down!");
        }
    }
};

window.onload = myObj.init;