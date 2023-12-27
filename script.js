function myVlidation(){
    var error1 = document.querySelector(".error1");
    var error2 = document.querySelector(".error2");
    var error3 = document.querySelector(".error3");
    var error4 = document.querySelector(".error4");

    var isValid = true;
    var name = document.forms["myForm"]["name"].value
    if(name.length<5){
        error1.innerHTML ="*Enter your name"
        isValid = false;
    };
    var name = document.forms["myForm"]["email"].value
    if(name.length<5){
        error2.innerHTML ="*Enter your valid Email"
        isValid = false;
    };
    var name = document.forms["myForm"]["sub"].value
    if(name.length<5){
        error3.innerHTML ="*Enter your sub"
        isValid = false;
    };
    var name = document.forms["myForm"]["comment"].value
    if(name.length<5){
        error4.innerHTML ="*Enter your sub"
        isValid = false;
    };


    return isValid;
}