/**
 * Week 7 midterm prep.
 *
 * @category    Week 7
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.03.03
 **/

function TryCatchFun()
{
    try {
        try {
            // Thing 1
        }
        catch(err){
            console.error("TryCatchFun Error:", err);
            throw new Error("TryCatchFun Error!");
        }

        try {
            // Thing 2
        }
        catch(err){
            console.error("TryCatchFun Error:", err);
            throw new Error("TryCatchFun Error!");
        }

        try {
            // Thing 3
        }
        catch(err){
            console.error("TryCatchFun Error:", err);
            throw new Error("TryCatchFun Error!");
        }
    }
    catch(err){
        console.error("TryCatchFun Error:", err);
        throw new Error("One of the things failed!");
    }
}

function ShowMeSomething()
{
    try {
        console.log("This is a really nasty alert, please do not do this in real life!");
    }
    catch(err){
        console.error("ShowMeSomething Error:", err);
        throw new Error("ShowMeSomething Error!");
    }
}

function PageLoadHandler()
{
    // Append Example 1
    let appendBox = document.getElementById('appendBox');
    //console.log(appendBox);

    appendBox.append(" Banks");
    appendBox.innerHTML = appendBox.innerHTML + " Smith";

    // Append Example 2
    let myobj = {name:''};
    let firstName = 'Chad';
    let lastName = 'Banks';

    myobj.name = firstName + ' ' + lastName;



    // OnClick Test
    let myBtn = document.getElementById('TestBtn');
    //myBtn.onmouseover = ShowMeSomething;
    myBtn.onclick = ShowMeSomething;
    myBtn.addEventListener( 'click', ShowMeSomething );
}


window.onload = PageLoadHandler;
