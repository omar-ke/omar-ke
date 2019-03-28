
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
