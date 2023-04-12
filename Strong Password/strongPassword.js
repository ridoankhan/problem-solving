const strongPassword = () => {
    let password = document.getElementById('pwd').value;

    // Checking password length
    if(password.length < 8){
        let result = '';
        result += '8 charcters in length'; 
        document.getElementById("validationMessage").innerHTML = result;
        document.getElementById("validationMessage").style.color = "red";
        
    } else {
        let result = '';
        result += '8 charcters in length'; 
        document.getElementById("validationMessage").innerHTML = result;
        document.getElementById("validationMessage").style.color = "green";
    }

    // Check if password has at least one numeric value
    if(password.match(/.*[0-9].*/)){
        let result='';
        result += '\nNumeric Value\n'; 
        document.getElementById("validationMessage2").innerHTML = result;
        document.getElementById("validationMessage2").style.color = "green";
    } else{
        let result='';
        result += '\nNumeric Value\n'; 
        document.getElementById("validationMessage2").innerHTML = result;
        document.getElementById("validationMessage2").style.color = "red";
    }

    // Check if password contains at least one capital letter
    if(password.match(/[A-Z]+/)){
        let result='';
        result += '\Capital letter\n'; 
        document.getElementById("validationMessage3").innerHTML = result;
        document.getElementById("validationMessage3").style.color = "green";
    } else {
        let result='';
        result += '\nCapital letter\n'; 
        document.getElementById("validationMessage3").innerHTML = result;
        document.getElementById("validationMessage3").style.color = "red";
    }

    // Check if password contains at least one lowercase letter
    if(password.match(/[a-z]+/)){
        let result='';
        result += '\nLowercase letter\n'; 
        document.getElementById("validationMessage4").innerHTML = result;
        document.getElementById("validationMessage4").style.color = "green";
    } else{
        let result='';
        result += '\nLowercase letter\n'; 
        document.getElementById("validationMessage4").innerHTML = result;
        document.getElementById("validationMessage4").style.color = "red";
    }

    // Check if passowrd contains at least one special characters
    
    if(password.match(/[.*&^%$#@()/]+/)){
        let result='';
        result += '\nSpecial letter\n'; 
        document.getElementById("validationMessage5").innerHTML = result;
        document.getElementById("validationMessage5").style.color = "green";
    } else {
        let result='';
        result += '\nSpecial Letter\n'; 
        document.getElementById("validationMessage5").innerHTML = result;
        document.getElementById("validationMessage5").style.color = "red";
    }
}
