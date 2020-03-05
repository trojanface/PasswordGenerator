//button that when pressed will open options for your password generation
//options suc as password length, capitals?, numbers? special characters?
//button that generates the password.
//algorithm that feeds the criteria and turns it into a random generator.


//User options
let password_length = 8;
let boolean_array = [true,false,false,false];

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
let uppercase_text_variable = document.getElementById("uppercase_check");
let lowercase_text_variable = document.getElementById("lowercase_check");
let special_text_variable = document.getElementById("special_check");
let number_text_variable = document.getElementById("numbers_check");
let length_text_variable = document.getElementById("password_length_text");
let length_slider_variable = document.getElementById("password_length_slider");
let warning_text = document.getElementById("invalid_warning");
let generate_button_variable = document.getElementById("generate_button");
let password_text_variable = document.getElementById("password_text");
let refresh_button = document.getElementById("refresh_button");

//Event listeners
lowercase_text_variable.addEventListener("click", function () {boolean_array[0] = !boolean_array[0]});
uppercase_text_variable.addEventListener("click", function () {boolean_array[1] = !boolean_array[1]});
special_text_variable.addEventListener("click", function () {boolean_array[2] = !boolean_array[2]});
number_text_variable.addEventListener("click", function () {boolean_array[3] = !boolean_array[3]});
generate_button_variable.addEventListener("click", generate);
refresh_button.addEventListener("click", generate);
length_slider_variable.addEventListener("input", function () {password_length = length_slider_variable.value, length_text_variable.innerHTML = length_slider_variable.value});

//add dark mode


//Password Generation
function generate() {
    refresh_button.style.display = "inline"; //makes the regenerate button visible
    password = ""; //Clears the password variable.
    start_button.innerHTML = "Options"; //changes the text of the start button to options

    // take toggle values and generate random amounts to fit within the password length use array of 
    //options and assign a number to each, randomly generate the number based on each option starting with at least 1.
    // add these values to the password 
    // scramble the password var
    
let percentage_split = [0,0,0,0];
for (let i = 0; i < boolean_array.length; i++) {
if (boolean_array[i] == true) {
    percentage_split[i] = 1;
}

}

if (percentage_split.reduce((a, b) => a + b, 0) != 0) {
for (var i = (percentage_split.reduce((a, b) => a + b, 0)); i < password_length; i++) {
    let chosen_addition = Math.floor(Math.random()*percentage_split.length);
    if (boolean_array[chosen_addition] == true) {
    percentage_split[chosen_addition]++;
    } else {
        i--;
    }
}

    console.log(percentage_split);

    for (let i = 0; i < percentage_split[0]; i++) { //adds lowercase letters
        password += letter_array[Math.floor(Math.random() * letter_array.length)];
    }
    for (let j = 0; j < percentage_split[1]; j++) { //adds capital letters
        password += letter_array[Math.floor(Math.random() * letter_array.length)].toUpperCase();
    }
    for (let k = 0; k < percentage_split[2]; k++) { //adds special characters
        password += special_array[Math.floor(Math.random() * special_array.length)];
    }
    for (let m = 0; m < percentage_split[3]; m++) { //adds number
        password += number_array[Math.floor(Math.random() * number_array.length)];
    }


    for (let l = 0; l < 300; l++) { //scrambles the order
        let random_selection = Math.floor(Math.random() * password.length);
        password += password[random_selection];
        password = password.substring(0, random_selection) + password.substring(random_selection + 1);
    }
    password_text_variable.innerHTML = password;
} else {
    console.log("Nothing checked!");
}
}