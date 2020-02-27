//button that when pressed will open options for your password generation
//options such as password length, capitals?, numbers? special characters?
//button that generates the password.
//algorithm that feeds the criteria and turns it into a random generator.


//User options
let password_length = 3;
let capital_number = "0";
let special_number = 0; 

//Stored Data

let letter_array = "abcdefghijklmnopqrstuvwxyz";
let number_array = "0123456789";
let special_array = ["\~","\!","\@","\#","\$","\%","\^","\&","\*"];



function capitalfunc(countVar) {
    document.getElementById("capital_button").innerHTML = ""+countVar;
    capital_number = countVar;
}

