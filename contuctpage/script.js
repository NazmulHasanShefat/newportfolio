function myVlidation(){
    var error1 = document.querySelector(".error1");
    var error2 = document.querySelector(".error2");
    var error3 = document.querySelector(".error3");
    var error4 = document.querySelector(".error4");

    var isValid = true;
    var name = document.forms["myForm"]["name"].value
    if(name.length>25){
        error1.innerHTML ="*Enter your name";
        isValid = false;
    };
    var email = document.forms["myForm"]["email"].value
    if(email.length>40){
        error2.innerHTML ="*Enter your valid Email";
        isValid = false;
    };
    var subject = document.forms["myForm"]["Subject"].value
    if(subject.length<5){
        error3.innerHTML ="*Enter your valid subject";
        isValid = false;
    };
    var comment = document.forms["myForm"]["comment"].value
    if(comment.length<5){
        error4.innerHTML ="*Enter your Comment";
        isValid = false;
    };


    return isValid;
}