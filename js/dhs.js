/* Human Services JavaScript */
const test = ["123", "321"];
const rand = Math.floor(Math.random() * 2);


/* Generates the random user data which is seen on the Human Services page. */
function items() {
    document.getElementById('test').value = test[rand];


/* Tells the user they have updated their details and refreshes page after 5 seconds. */
function userDetailsSubmit() {
    setTimeout('location.reload()',5000);
    document.getElementById('updateSuccess').style.display = "block";
    document.getElementById('updateSuccess').innerHTML = "Your details have been updated! This page will refresh in 5 seconds.";
}