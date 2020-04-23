/**
 * Week 12 - AJAX
 *
 * @category    Week 12
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.04.21
 * @link        https://www.w3schools.com/xml/ajax_intro.asp
 * @link        https://api.jquery.com/jquery.ajax/
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
            week12.makeRequest('https://cislinux.hfcc.edu/~crbanks1/api.php', JSON.parse(requestString));
        }
        catch( e )
        {
            console.error( "Request Error:", e.message );
        }
    },
    makeRequest: function( url, data )
    {
        $.ajax( {method: "POST", url: url, data: data, complete: week12.getResponse} );
    },
    getResponse: function( response )
    {
        console.log("Response:", response.responseText);

        var closeButton = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';

        try {
            var json = JSON.parse(response.responseText);

            if( json.statusCode == '200' )
            {
                $('#alerts').append( '<div class="alert alert-success alert-dismissible fade show text-left" role="alert">' + json.message + ' ' + closeButton + '</div>' );
            }
            else if( json.statusCode == '500' )
            {
                $('#alerts').append( '<div class="alert alert-danger alert-dismissible fade show text-left" role="alert">' + json.message + ' ' + closeButton + '</div>' );
            }
        }
        catch( e )
        {
            console.error( "Response Error:", e.message );
        }
    }
};


window.onload = week12.init;
