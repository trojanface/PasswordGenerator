//button that when pressed will open options for your password generation
//options suc as password length, capitals?, numbers? special characters?
//button that generates the password.
//algorithm that feeds the criteria and turns it into a random generator.


//User options
let password_length = 6;
let capital_number = 2;
let special_number = 1;
let number_number = 2;

//Stored Data

let letter_array = "abcdefghijklmnopqrstuvwxyz";
let number_array = "0123456789";
let special_array = ["\~", "\!", "\@", "\#", "\$", "\%", "\^", "\&", "\*"];

//Password
let password = "";

//User Input function
function selectionfunc(countVar, optionchoice) {
    if (optionchoice === "Capital") {
        capital_number = countVar;
        document.getElementById("capital_button").innerHTML = "" + countVar;
    } else if (optionchoice === "Special") {
        special_number = countVar;
        document.getElementById("special_button").innerHTML = "" + countVar;
    } else if (optionchoice === "Number") {
        number_number = countVar;
        document.getElementById("number_button").innerHTML = "" + countVar;
    } else {
        password_length = countVar;
        document.getElementById("length_button").innerHTML = "" + countVar;
    }
}

//Password Generation
function generate() {
    document.getElementById("refresh_button").style.display = "inline"; //makes the regenerate button visible
    password = ""; //Clears the password variable.
    document.getElementById("start_button").innerHTML = "Options"; //changes the text of the start button to options
    for (let j = 0; j < capital_number; j++) { //adds capital letters
        password += letter_array[Math.floor(Math.random() * letter_array.length)].toUpperCase();
    }
    for (let m = 0; m < number_number; m++) { //adds number
        password += number_array[Math.floor(Math.random() * number_array.length)];
    }
    for (let k = 0; k < special_number; k++) { //adds special characters
        password += special_array[Math.floor(Math.random() * special_array.length)];
    }
    for (let i = 0; i < password_length - (number_number + special_number + capital_number); i++) { //adds lowercase letters
        password += letter_array[Math.floor(Math.random() * letter_array.length)];
    }
    for (let l = 0; l < 300; l++) { //scrambles the order
        let random_selection = Math.floor(Math.random() * password.length);
        password += password[random_selection];
        password = password.substring(0, random_selection) + password.substring(random_selection + 1);
    }
    document.getElementById("password_text").innerHTML = password;
}