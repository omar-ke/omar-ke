function Heatmap() {
    var phone = [Math.floor(Math.random() * 30)];


    if (phone <= 10) {
        document.getElementById('phone').innerHTML = "Poor";
        document.getElementById('phone').style.color = "red";
    } else if (phone <= 20) {
        document.getElementById('phone').innerHTML = "Okay";
        document.getElementById('phone').style.color = "orange";
    } else if (phone <= 30) {
        document.getElementById('phone').innerHTML = "Good";
        document.getElementById('phone').style.color = "green";
    }
}