/**
 * Week 13 - AJAX Again
 *
 * @category    Week 13
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.05.05
 * @link        https://pokeapi.co/
 * 
 **/

var week12 = {

    init: function ()
    {
        var requestBtn = document.getElementById('requestBtn');
        requestBtn.addEventListener('click', week12.requestWrapper);
        console.log("Page loaded!");
    },
    requestWrapper: function( event )
    {
        var requestString = document.getElementById('dataBuilder').value;

        console.log( "Request Object String: ", requestString );
        console.log( "Sending AJAX Request...." );

        try {
            week12.makeRequest('https://pokeapi.co/api/v2/pokemon/' + requestString, {});
        }
        catch( e )
        {
            console.error( "Request Error:", e.message );
        }
    },
    makeRequest: function( url, data )
    {
        $.ajax( {method: "GET", url: url, data: {}, complete: week12.getResponse} );
    },
    getResponse: function( response )
    {
        //console.log("Response:", response.responseText);
        console.log("Response:", response);


        var closeButton = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';

        try {
            var json = JSON.parse(response.responseText);
            console.log("JSON:", json);

            if( response.status == '200' )
            {
                $('#alerts').append( '<div class="alert alert-success alert-dismissible fade show text-left" role="alert">' + json.name + ' ' + closeButton + '</div>' );
            }
            else if( response.status == '500' )
            {
                $('#alerts').append( '<div class="alert alert-danger alert-dismissible fade show text-left" role="alert">' + json.name + ' ' + closeButton + '</div>' );
            }
        }
        catch( e )
        {
            console.error( "Response Error:", e.message );
        }
    }
};


window.onload = week12.init;
