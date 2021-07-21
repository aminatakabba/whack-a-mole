const countDown = document.querySelector("#countdown"); //selecting the timer
const count = document.querySelector("#count"); //selecting the count
const holes = document.querySelectorAll('.hole'); //selecting the the individual holes
const culprit = document.querySelector('.culprit'); //selecting the culprit/mole
const button = document.querySelector('.table-button'); //selecting the button to start the game

let touches = 0; // count starts at zero
let touchedHole; // This will store the hole being clicked

// Randomly selects a hole and makes it red. Because this function wil run multiple times you must clear out the previous value, so the firs thing I do is remove the culprit/mole
function holeRandom() {
    holes.forEach(hole => {
        hole.classList.remove('culprit');
    });
    // This will randomly select a hole and make
    let placeRandom = holes[Math.floor(Math.random() * 8)];
    placeRandom.classList.add('culprit')

    touchedHole = placeRandom.id; // picks the id of the hole to the use it afterwards
};


// forEach function will go through all the click on each hole and increas the touches value, and then display it
holes.forEach(hole => {
    // The evnt listener will look at how many times the holes are being touched
    hole.addEventListener("mousedown", () => {
        if (hole.id == touchedHole) {
            touches++ // increase the count when it is touched
            count.textContent = touches; // display on screen
            touchedHole = null; // This makes it null again
        }
    })
})

// The holeRandom function will re-run every 7 seconds
let timerId = null; // will stop it from moving
function changeCulprit() {
    timerId = setInterval(holeRandom, 700)
}

let time = 61; // The time will start at 60 seconds
function timer() {
    time--
    countdown.textContent = time
    if(time == 0) {
        clearInterval(TimerId);
        clearInterval(timerId);
        alert('GAME OVER');
    }
}
let TimerId = setInterval(timer, 1000) // will make the timer function run every second and show the current value


// SOME ISSUES I'VE COME ACROSS
//  - I deviced to stop working and do the second challenge so I wasn't able to add the countdown timer into the start button
//  - I did not have enough time to attempt the second part of the firs challenge, saving 10 of the highest scores

