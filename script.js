'use strict'


// Pull in all the DOM elements that we need
const form = document.getElementById('form');
const firstName = document.getElementById('First name');
const lastName = document.getElementById('Last name');
const email = document.getElementById('Email');
const password = document.getElementById('Password');




// Creating a function that adds the error class
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};


// Creating a function that adds the success class
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};


// Check validation of an email
      function validEmail(email) {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
        return re.test(String(email).toLowerCase());
      }



// Adding an event listener to the form and writing if statements for every field

// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     if (firstName.value === '') {
//         showError(firstName, 'First name cannot be empty')
//     };

//     if (lastName.value === '') {
//         showError(lastName, 'Last name cannot be empty')
//     };

//     if (email.value === '') {
//         showError(email, 'Email cannot be empty')
//     } else if (!isValidEmail(email.value)) {
//         showError(email, 'Looks like this is not an email')
//     };

//     if (password.value === '') {
//         showError(password, 'Password cannot be empty')
//     };
// });

// a function that loops through every field in the array
function checkRequiredFields(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${input.id} cannot be empty`)
        } else {
            showSuccess(input);
        };
    }) 
};

// another function just to check if the email is valid
function checkEmailField (input) {
    if (email.value === '') {
        showError(email, 'Email cannot be empty') 
    } else if (!validEmail(email.value)) {
        showError(email, 'Looks like this is not an email')
    } else {
        showSuccess(input);
    };
};

// It's better if we write one function that goes over every field in an array instead of writing 'if' statement fot each field
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
// });



//Creating the function
// const validation = function(e) {
//     e.preventDefault();
// checkRequiredFields([firstName, lastName, email, password]);
// checkEmailField(email);
// };



form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequiredFields([firstName, lastName, email, password]);
    checkEmailField(email);
});

form.addEventListener('keyup', function(e) {
    e.preventDefault();
    checkRequiredFields([firstName, lastName, email, password]);
    checkEmailField(email);
});

