function Heatmap() {
    var phone = [Math.floor(Math.random() * 30)];
    var tv = [Math.floor(Math.random() * 30)];
    var nbn = [Math.floor(Math.random() * 30)];
    var radio = [Math.floor(Math.random() * 30)];
    var foxtel = [Math.floor(Math.random() * 30)];
    var adsl = [Math.floor(Math.random() * 30)];

    if (phone <= 10) {
        document.getElementById('phone').innerHTML = "Poorly";
        document.getElementById('phone').style.color = "red";
    } else if (phone <= 20) {
        document.getElementById('phone').innerHTML = "Okay";
        document.getElementById('phone').style.color = "orange";
    } else if (phone <= 30) {
        document.getElementById('phone').innerHTML = "Good";
        document.getElementById('phone').style.color = "green";
    }
    if (tv <= 10) {
        document.getElementById('tv').innerHTML = "Poorly";
        document.getElementById('tv').style.color = "red";
    } else if (tv <= 20) {
        document.getElementById('tv').innerHTML = "Okay";
        document.getElementById('tv').style.color = "orange";
    } else if (tv <= 30) {
        document.getElementById('tv').innerHTML = "Good";
        document.getElementById('tv').style.color = "green";
    }
    if (nbn <= 10) {
        document.getElementById('nbn').innerHTML = "Poorly";
        document.getElementById('nbn').style.color = "red";
    } else if (nbn <= 20) {
        document.getElementById('nbn').innerHTML = "Okay";
        document.getElementById('nbn').style.color = "orange";
    } else if (nbn <= 30) {
        document.getElementById('nbn').innerHTML = "Good";
        document.getElementById('nbn').style.color = "green";
    }
    if (radio <= 10) {
        document.getElementById('radio').innerHTML = "Poorly";
        document.getElementById('radio').style.color = "red";
    } else if (radio <= 20) {
        document.getElementById('radio').innerHTML = "Okay";
        document.getElementById('radio').style.color = "orange";
    } else if (radio <= 30) {
        document.getElementById('radio').innerHTML = "Good";
        document.getElementById('radio').style.color = "green";
    }
    if (foxtel <= 10) {
        document.getElementById('foxtel').innerHTML = "Poorly";
        document.getElementById('foxtel').style.color = "red";
    } else if (foxtel <= 20) {
        document.getElementById('foxtel').innerHTML = "Okay";
        document.getElementById('foxtel').style.color = "orange";
    } else if (foxtel <= 30) {
        document.getElementById('foxtel').innerHTML = "Good";
        document.getElementById('foxtel').style.color = "green";
    }
    if (adsl <= 10) {
        document.getElementById('adsl').innerHTML = "Poorly";
        document.getElementById('adsl').style.color = "red";
    } else if (adsl <= 20) {
        document.getElementById('adsl').innerHTML = "Okay";
        document.getElementById('adsl').style.color = "orange";
    } else if (adsl <= 30) {
        document.getElementById('adsl').innerHTML = "Good";
        document.getElementById('adsl').style.color = "green";
    }
    setTimeout('location.reload()', 5000);
}
