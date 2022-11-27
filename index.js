let x = document.getElementById("button");
myFunction();
function myFunction() {
    if(    document.documentElement.scrollTop>500)
    {
        x.style.display="block";
    }
    else
    {
        x.style.display="none";
    }
    setTimeout(myFunction, 1500);
}