//button that when pressed will open options for your password generation
//options such as password length, capitals?, numbers? special characters?
//button that generates the password.
//algorithm that feeds the criteria and turns it into a random generator.


//User options
let password_length = 6;
let capital_number = 2;
let special_number = 1; 

//Stored Data

let letter_array = "abcdefghijklmnopqrstuvwxyz";
let number_array = "0123456789";
let special_array = ["\~","\!","\@","\#","\$","\%","\^","\&","\*"];

//Password
let password = "";

//User Input function
function selectionfunc(countVar, optionchoice) {
    if (optionchoice === "Capital") {
        capital_number = countVar;
        document.getElementById("capital_button").innerHTML = ""+countVar;
    } else if (optionchoice === "Special") {
        special_number = countVar;
        document.getElementById("special_button").innerHTML = ""+countVar;
    } else {
        password_length = countVar;
        document.getElementById("length_button").innerHTML = ""+countVar;
    }
}

//Password Generation
function generate() {
password = ""; //Clears the password variable.
for (let i = 0; i < password_length; i++) {
    password += letter_array[Math.floor(Math.random()*letter_array.length)];
}

console.log(""+password);
}