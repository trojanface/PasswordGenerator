//button that when pressed will open options for your password generation
//options suc as password length, capitals?, numbers? special characters?
//button that generates the password.
//algorithm that feeds the criteria and turns it into a random generator.


//User options
let password_length = 8;
let lowercase_number = 4;
let capital_number = 2;
let special_number = 1;
let number_number = 1;

let use_lowercase = true;
let use_uppercase = false;
let use_special = false;
let use_number = false;


//Stored Data

let letter_array = "abcdefghijklmnopqrstuvwxyz";
let number_array = "0123456789";
let special_array = ["\~", "\!", "\@", "\#", "\$", "\%", "\^", "\&", "\*"];

//Password
let password = "";

//HTML Element variables - to preserve performance.
let uppercase_text_variable =  document.getElementById("uppercase_text");
let lowercase_text_variable = document.getElementById("lowercase_text");
let special_text_variable = document.getElementById("special_text");
let number_text_variable = document.getElementById("number_text");
let length_text_variable = document.getElementById("password_length_text");
let warning_text = document.getElementById("invalid_warning");
let generate_button_variable = document.getElementById("generate_button");
let password_text_variable = document.getElementById("password_text");
let refresh_button = document.getElementById("refresh_button");
let start_button = document.getElementById("start_button");
//add dark mode


//Password Generation
function generate() {
    refresh_button.style.display = "inline"; //makes the regenerate button visible
    password = ""; //Clears the password variable.
    start_button.innerHTML = "Options"; //changes the text of the start button to options
    for (let j = 0; j < capital_number; j++) { //adds capital letters
        password += letter_array[Math.floor(Math.random() * letter_array.length)].toUpperCase();
    }
    for (let m = 0; m < number_number; m++) { //adds number
        password += number_array[Math.floor(Math.random() * number_array.length)];
    }
    for (let k = 0; k < special_number; k++) { //adds special characters
        password += special_array[Math.floor(Math.random() * special_array.length)];
    }
    for (let i = 0; i < lowercase_number; i++) { //adds lowercase letters
        password += letter_array[Math.floor(Math.random() * letter_array.length)];
    }
    for (let l = 0; l < 300; l++) { //scrambles the order
        let random_selection = Math.floor(Math.random() * password.length);
        password += password[random_selection];
        password = password.substring(0, random_selection) + password.substring(random_selection + 1);
    }
    password_text_variable.innerHTML = password;
}