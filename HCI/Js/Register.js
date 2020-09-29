function Reset() {
    document.getElementById('txtName').value = ""; 
    document.getElementById('txtEmail').value = "";
    document.getElementById('txtPass').value = "";
    $("#checkbox").prop("checked", false);
    $(".gender").prop("checked", false);
 }

 function Submit() {
    var Name = $("#txtName");
    var Email = $("#txtEmail");
    var Gender = $(".gender");
    var Password = $("#txtPass");
    var Payment = $("#payment");
    var Aggrement = $("#checkbox");
    var msg="";
    if(Name.val()== null || Name.val() == ''){
        msg=msg+"Please Input Your Name !\n";
    }
    if(Email.val()== null || Email.val() == ''){
        msg=msg+"Please Input Your Email !\n";
    }
    else{
        if(Email.val().split('@').length<=1){
            msg=msg+"Your Email must contain @ !\n";
        }
    }
    if(!Gender[0].checked && !Gender[1].checked){
        msg=msg+"Please Choose Your Gender!\n";
    }
    if(Password.val()== null || Password.val() == ''){
        msg=msg+"Please input Your Password!\n";
    }
    if(!Aggrement.prop("checked")){
        msg=msg+"You Must Agree to The Aggrement!\n";
    }
    if(msg==""){
        alert('Success');
        window.location.href="Index.html";
    }
    else{
        alert(msg);
    }
 }
 