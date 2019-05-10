/* Human Services JavaScript */
function items() {
    var first = ["Jeff","Omar","Ryan","Ian","Katie"];
    var surname = ["Jefferson","Kennedy","Nguyen","Banks","Owens"];
    var email = ["jeff@jeff.com","ok@gmail.com","ryan@nguyen.com","banksy@yahoo.com","kt_on@outlook.com"];
    var dob = ["1985-10-31","2000-05-09","1998-03-08","1986-10-04","1993-08-22"];

    var rand = [Math.floor(Math.random() * 5)];



    document.getElementById('first').value = first[rand];
    document.getElementById('surname').value = surname[rand];
    document.getElementById('email').value = email[rand];
    document.getElementById('dob').value = dob[rand];
}
/*
function userSubmit() {
    setTimeout('location.reload()',5000);
    document.getElementById('updateSuccess').style.display = "block";
    document.getElementById('updateSuccess').innerHTML = "Your details have been updated! This page will refresh in 5 seconds.";
}

} */