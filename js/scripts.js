
//Defence function
function pinCheck() {
    var x, text;
    x = document.getElementById("pin").value;
    if (x == 1001) {
        text = "Missile Launched. <p><img src=\'images/rocket.png\' width=\"60%\" height=\"60%\"></p>";
    } else {
        text = "Invalid pin entered. <p><img src=\'images/rocket1.png\' width=\"35%\" height=\"35%\"></p>";
    }
    document.getElementById("feedback").innerHTML = text;
}



/* Parliament House JavaScript */

/* Checks if the candidate values equal 10. If so it 'submits' the form to the AEC. */
function validateElectionForm() {
    var candidate1 = document.getElementById('candidate1').value;
    var candidate2 = document.getElementById('candidate2').value;
    var candidate3 = document.getElementById('candidate3').value;
    var candidate4 = document.getElementById('candidate4').value;
    var candidates = Number(candidate1) + Number(candidate2) + Number(candidate3) + Number(candidate4);

    if (candidates == 10){
        document.getElementById('candidateSuccess').style.display = "block";
        document.getElementById('candidateSuccess').innerHTML = "Thank you for voting! This page will refresh in 5 seconds.";
        document.getElementById('candidateError').style.display = "none";
        document.getElementById('candidateError').innerHTML = "";
        setTimeout('location.reload()',5000)
    } else {
        document.getElementById('candidateSuccess').style.display = "none";
        document.getElementById('candidateSuccess').innerHTML = "";
        document.getElementById('candidateError').style.display = "block";
        document.getElementById('candidateError').innerHTML = "You have not completed the form correctly!"
    }
}
