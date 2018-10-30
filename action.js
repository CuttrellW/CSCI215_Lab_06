console.log("start");






document.getElementById('age').onkeyup = function() {
    var age = document.getElementById('age');
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');

    if(regEx.test(document.getElementById('age').value)) {
            age.style.backgroundColor="white";
    } else {
            age.style.backgroundColor="red";
    }
};


document.getElementById('name').onkeyup= function() {
    var name = document.getElementById('name');
    var regExp = new RegExp('<');

    if(regExp.test(document.getElementById('name').value)) {
        name.style.backgroundColor="red";
    }
    else{
        name.style.backgroundColor="white";
    }
};

function checkEmail(email) {
    var re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (re.test(document.getElementById('email').value)) {
        return (false)
    }
    else {
        alert ("Invalid email address");
        return (true)
    }

}

document.getElementById('submit').onclick = checkEmail;