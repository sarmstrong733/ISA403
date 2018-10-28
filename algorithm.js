var season = 0;
var activity = 0;
var meal = 0;
var vacation = 0;
var total = 0;

function displayResult() { 
    season = parseInt(document.querySelector('input[name = "season"]:checked').value);

    activity = parseInt(document.querySelector('input[name = "activity"]:checked').value);

    meal = parseInt(document.querySelector('input[name = "meal"]:checked').value);

    vacation = parseInt(document.querySelector('input[name = "vacation"]:checked').value);

    total = season + activity + meal + vacation;

    document.getElementById("answer").innerHTML = total;

        if (total < 4) {document.getElementById("answer2").innerHTML = "You got Taylor Swift."; } 
        else if (total >= 4 && total < 7) {document.getElementById("answer2").innerHTML = "You got Justin Bieber."; }
        else if (total >= 7) {document.getElementById("answer2").innerHTML = "You got Maroon 5."; } 
        else {alert("Fill out all questions before submitting."); }
    return false; }
window.onload = function () {document.getElementById("submitForm").onclick = displayResult; };
