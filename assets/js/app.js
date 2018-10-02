// Variable



//Eventlisteners
eventlisteners();

function eventlisteners() {
    // Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);
}

//Functions

function newTweet(e) {
    e.preventDefault();

    // Read the textarea value
}