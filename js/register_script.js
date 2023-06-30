function submitFunction(){
    let full_name = document.getElementById('full_name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirm_password = document.getElementById('confirm_password').value.trim();
    let address = document.getElementById('address').value.trim();
    let agree = document.getElementById('agree').checked;

    let err_name = document.getElementById('err_name');
    let err_email = document.getElementById('err_email');
    let err_pass1 = document.getElementById('err_pass1');
    let err_pass2 = document.getElementById('err_pass2');
    let err_address = document.getElementById('err_address');
    let err_agree = document.getElementById('err_agree');
    
    let validate = true;

    if(full_name == ''){
        err_name.innerHTML = "You need to fill out your name";
        validate = false;
    }
    else{
        err_name.innerHTML = "";
    }
    

    if(email == ''){
        err_email.innerHTML = "You need to fill out your email";
        validate = false;
    }
    else{
        err_email.innerHTML = "";
    }


    if(password == ''){
        err_pass1.innerHTML = "You need to fill out your password";
        validate = false;
    }
    else{
        err_pass1.innerHTML = "";
    }


    if(confirm_password == ''){
        err_pass2.innerHTML = "You need to fill out your confirm password";
        validate = false;
    }
    else if(password != confirm_password){
        err_pass2.innerHTML = "confirm password must be the same as the password";
        validate = false;
    }
    else{
        err_pass2.innerHTML = "";
    }


    if(address == ''){
        err_address.innerHTML = "You need to fill out your address";
        validate = false;
    }
    else{
        err_address.innerHTML = "";
    }


    if(agree === false){
        err_agree.innerHTML = "You must agree to the terms and conditions";
        validate = false;
    }
    else{
        err_agree.innerHTML = "";
    }


    if(validate == false) return false;
    return true
}
