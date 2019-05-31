var second_enabled = false;


function powerUsage(enabled) {
    var grid1 = [Math.floor(Math.random() * 100)];
    var grid2 = [Math.floor(Math.random() * 100)];
    document.getElementById('p1Status').innerHTML = "Enabled";
    document.getElementById('p1Status').style.color = "green";
    document.getElementById('p1Percentage').innerHTML = grid1;
    if (grid1 <= 50) {
        document.getElementById('p1Recommend').innerHTML = "Low";
        document.getElementById('p1Load').innerHTML = "Low";
        document.getElementById('p1Load').style.color = "green";
        document.getElementById('p1Load').style.fontWeight = "normal";
    } else if (grid1 > 50 && grid1 <= 80) {
        document.getElementById('p1Recommend').innerHTML = "Medium";
        document.getElementById('p1Load').innerHTML = "Medium";
        document.getElementById('p1Load').style.color = "orange";
        document.getElementById('p1Load').style.fontWeight = "normal";
    } else if (grid1 > 80) {
        document.getElementById('p1Recommend').innerHTML = "High";
        document.getElementById('p1Load').innerHTML = "High";
        document.getElementById('p1Load').style.color = "red";
        document.getElementById('p1Load').style.fontWeight = "bold";
    }
    if (enabled) {
        document.getElementById('p2Status').innerHTML = "Enabled";
        document.getElementById('p2Status').style.color = "green";
        document.getElementById('p2Percentage').innerHTML = grid2;
        if (grid1 <= 50) {
            document.getElementById('p2Load').innerHTML = "Low";
            document.getElementById('p2Load').style.color = "green";
            document.getElementById('p2Load').style.fontWeight = "normal";
        } else if (grid1 > 50 && grid1 <= 80) {
            document.getElementById('p2Load').innerHTML = "Medium";
            document.getElementById('p2Load').style.color = "orange";
            document.getElementById('p2Load').style.fontWeight = "normal";
        } else if (grid1 > 80) {
            document.getElementById('p2Load').innerHTML = "High";
            document.getElementById('p2Load').style.color = "red";
            document.getElementById('p2Load').style.fontWeight = "bold";
        }
    } else {
        document.getElementById('p2Status').innerHTML = "Disabled";
        document.getElementById('p2Percentage').innerHTML = "0";
        document.getElementById('p2Load').innerHTML = "N/A";
    }
}


function login() {
    if (document.getElementById('username').value === "admin" && document.getElementById('password').value === "Password321") {
        document.getElementById('login').style.visibility = "hidden";
        document.getElementById('toggle').style.visibility = "visible";
    } else {
        document.getElementById('error').style.display = "block";
        document.getElementById('error').innerHTML = "Incorrect Username or Password.";
    }
}

function toggleGrid2() {
    if (second_enabled === false){
        second_enabled = true;
        document.getElementById('powerButton').innerHTML = "Disable Grid 2";

    } else if (second_enabled === true) {
        document.getElementById('powerButton').innerHTML = "Enable Grid 2";
    }

}

//window.setInterval((function () {
//    powerUsage(second_enabled);
//}, 5000);

