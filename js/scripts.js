
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

function changeImage() {
    var image = document.getElementById('secondary_power');
    if (image.src.match("bulbon")) {
        image.src = "images/pic_bulboff.gif";
    } else {
        image.src = "images/pic_bulbon.gif";
    }
}
//Enviro function
function check_pin_code() {
    var pin_entered, text;
    //Get the value of input field with id="pin_code"
    pin_entered = document.getElementById("pin_code").value;
    // Check to see if pin_entered is correct
    if (pin_entered == "1234") {
        text = '<div class="bs-example">\n' +
            '<div class="row">\n' +
            '<div class="col-md-6"><img src="images/pic_bulbon.gif" alt="" width="100" height="180" id="main_power"></div>\n' +
            '<div class="col-md-6"><img id="secondary_power" onclick="changeImage()" src="images/pic_bulboff.gif" width="100" height="180" alt="bulb off"></div>\n' +
            '</div>\n'
    } else {
        text = "Input Not valid";
    }
    document.getElementById("power_usage").innerHTML = text;
}

