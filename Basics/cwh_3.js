console.log("Welcome to cwh_3.js file");
// Topic: Js Events 
function clicked()
{
    console.log("The button called 'Click Me Bro' was clicked");
    console.log("This was super easy");
}
window.onload =function()
{
    console.log("The window was loaded!");
}

// taklu is a id given to the button
taklu.addEventListener('click', function()
{
    console.log("Click ho gaya, with the help of addEventListener");
})
taklu.addEventListener('click', function()
{
    console.log("Click ho gaya, with the help of addEventListener");
})
taklu.addEventListener('mouseover', function()
{
    console.log("Mouse Over hogaya, with the help of eventListener");
})
taklu.addEventListener('click', function()
{
    document.querySelector('.container')[1].innerHTML = "<b> You have Clicked </b>"; 
})

// SetTimeOut and setInterval 
console.log("Topic: SetTimeout and setInterval");
function logkaro()
{
    console.log("yoyoyoyoy!!!!!");
}
setTimeout(logkaro, 1000);
setInterval(logkaro, 10000);
clearInterval(logkaro);
clearTimeout(logkaro);

// event listner syntax 
// id_name.addEventListner(" onclick ", function()
// {
//     console.log("HEllo This is just a syntax!")
// });
