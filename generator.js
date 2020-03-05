//User options
let password_length = 8;
let boolean_array = [true, false, false, false];

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
let warning_text = document.getElementById("error_text");
let generate_button_variable = document.getElementById("generate_button");
let password_text_variable = document.getElementById("password_text");
let refresh_button = document.getElementById("refresh_button");
let modal_bubble = document.getElementById("modal-body");

//Event listeners
lowercase_text_variable.addEventListener("click", function () { boolean_array[0] = !boolean_array[0] });
uppercase_text_variable.addEventListener("click", function () { boolean_array[1] = !boolean_array[1] });
special_text_variable.addEventListener("click", function () { boolean_array[2] = !boolean_array[2] });
number_text_variable.addEventListener("click", function () { boolean_array[3] = !boolean_array[3] });
generate_button_variable.addEventListener("click", generate);
refresh_button.addEventListener("click", generate);
length_slider_variable.addEventListener("input", function () { password_length = length_slider_variable.value, length_text_variable.innerHTML = length_slider_variable.value });
modal_bubble.addEventListener("click", error_check);

//This functions checks that at least one checkbox has been selected
function error_check() {
    let is_error = true;
    //loops through the array of stored checkbox values and checks that at least one is true.
    for (var i = 0; i < boolean_array.length; i++) {
        if (boolean_array[i] == true) {
            is_error = false;
        }
    }
    //throws an error in the options modal and removes the choice to proceed.
    if (is_error == true) {
        generate_button_variable.style.display = "none";
        warning_text.style.display = "inline";
    } else {
        generate_button_variable.style.display = "inline";
        warning_text.style.display = "none";
    }
}

//Password Generation
function generate() {
    refresh_button.style.display = "inline"; //makes the regenerate button visible
    password = ""; //Clears the password variable.
    start_button.innerHTML = "Options"; //changes the text of the start button to options

    //This calculates which of the four types of characters have been checked. Each array index corresponds to
    //the same index in the boolean_array.
    let percentage_split = [0, 0, 0, 0];
    for (let i = 0; i < boolean_array.length; i++) {
        if (boolean_array[i] == true) {
            percentage_split[i] = 1;
        }

    }

    //This checks to ensure the sum of the new array is not 0. If it is 0 then we know no checkboxes have been ticked.
    //Is an added defense against errors.
    if (percentage_split.reduce((a, b) => a + b, 0) != 0) {
        //This loop randomly allocates how many of each character type is allowed to exist in the password.
        for (var i = (percentage_split.reduce((a, b) => a + b, 0)); i < password_length; i++) {
            let chosen_addition = Math.floor(Math.random() * percentage_split.length);
            if (boolean_array[chosen_addition] == true) {
                percentage_split[chosen_addition]++;
            } else {
                i--;
            }
        }

        //These loops add the characters into the password variable based upon how many they've been allocated by
        //the above loop.
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

        for (let l = 0; l < 300; l++) { //scrambles the order of characters
            let random_selection = Math.floor(Math.random() * password.length);
            password += password[random_selection];
            password = password.substring(0, random_selection) + password.substring(random_selection + 1);
        }
        //adds the password variable to the html element displayed to the user
        password_text_variable.innerHTML = password;
    } else {
        console.log("Nothing checked!");
    }
}