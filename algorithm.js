document.getElementById("submitForm").onsubmit = function () {
	   
var age = parseInt(document.querySelector('input[name = "age"]:checked').value);
	  
var activity = parseInt(document.querySelector('input[name = "activity"]:checked').value);
	   
var genre = parseInt(document.querySelector('input[name = "genre"]:checked').value);
	   
var total= age + activity + genre;
	  
document.getElementById("answer").innerHTML = total;

    if (total < 4) {
        document.getElementById("answer2").innerHTML = "You got Taylor Swift."; 
    } else if (total >= 4 && total < 7) {
        document.getElementById("answer2").innerHTML = "You got Justin Bieber."; 
    } else {
        document.getElementById("answer2").innerHTML = "You got Maroon 5."; }   
    return false; // required to not refresh the page; just leave this here
};// end the submit function
	
