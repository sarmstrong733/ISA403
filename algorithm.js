var age = 0;
var activity = 0;
var meal = 0;
var vacation = 0;
var total = 0;
            
function displayResult () { 
    var age = parseInt(document.querySelector('input[name = "season"]:checked').value);

    var activity = parseInt(document.querySelector('input[name = "activity"]:checked').value);

    var meal = parseInt(document.querySelector('input[name = "meal"]:checked').value);

    var vacation = parseInt(document.querySelector('input[name = "vacation"]:checked').value);

    var total= season + activity + meal + vacation;

    document.getElementById("answer").innerHTML = total;

    if(total < 4) {
        document.getElementById("answer2").innerHTML = "You got Taylor Swift.";}
    else if(total >=4 && total < 7) {
        document.getElementById("answer2").innerHTML = "You got Justin Bieber.";
    }
    else if{
        document.getElementById("answer2").innerHTML = "You got Maroon 5.";
    }  
    else {
        alert("Fill out all questions before submitting.");
    }
    return false; // required to not refresh the page; just leave this here
}// end the submit function
window.onload function (){
    document.getElementById("form1").onclick = displayResult;
}
