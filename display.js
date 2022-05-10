$(document).ready(function(){
    getdatafromlocal();
})

function getdatafromlocal()
{
   // let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorage.getItem("student"));
    console.log(studentObj);
    $("#fname").text(studentObj.firstname);
    $("#lname").text(studentObj.lastname);
   
}