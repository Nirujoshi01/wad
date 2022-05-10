$(document).ready(function(){
    $("#btn-submit").click(function(){
        function getdata(){
            let studentdata ={
                firstname: $("#fname").val(),
                lastname: $("#lname").val(),
            }
            return studentdata;
        }
        localStorage.setItem("student",JSON.stringify(getdata()));
        window.location.href="display.html"

    });
  
});