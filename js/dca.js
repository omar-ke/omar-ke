function Heatmap() {
    var phone = [Math.floor(Math.random() * 3)];
    var tv = [Math.floor(Math.random() * 3)];


    if (phone <= 1) {
        document.getElementById('phone').innerHTML = "Poorly";
        document.getElementById('phone').style.color = "red";
    } else if (phone <= 2) {
        document.getElementById('phone').innerHTML = "Okay";
        document.getElementById('phone').style.color = "orange";
    } else if (phone <= 3) {
        document.getElementById('phone').innerHTML = "Good";
        document.getElementById('phone').style.color = "green";
    }
    if (tv <= 1) {
        document.getElementById('tv').innerHTML = "Poorly";
        document.getElementById('tv').style.color = "red";
    } else if (tv <= 2) {
        document.getElementById('tv').innerHTML = "Okay";
        document.getElementById('tv').style.color = "orange";
    } else if (tv <= 3) {
        document.getElementById('tv').innerHTML = "Good";
        document.getElementById('tv').style.color = "green";
    }


    setTimeout('location.reload()', 5000);
}
