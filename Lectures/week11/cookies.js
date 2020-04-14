/**
 * cookieManager
 * 
 * This is all functionality related to cookies.
 *
 * @category    Week 11
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.04.14
 *
 **/



var cookieManager = {

    setCookie : function(cname, cvalue, exdays)
    {
        //document.cookie = "username=ProfBanks";
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookies : function()
    {
        return document.cookie;
    }
};


