// Variable
const tweetList = document.getElementById('tweet-list');


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
    const tweet = document.getElementById('tweet').value;

    //Create an <li> element 
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);
}