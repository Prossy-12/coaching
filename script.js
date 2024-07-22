const validation = () => {
    

    const username = document.getElementById('username');
 const password = document.getElementById('password');
 const email = document.getElementById('email');

let usernameRegex = /^[a-zA-Z]$/;
let emailRegex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let passwordRegex = /^[a-zA-Z0-9]{5,50}$/;

if(usernameRegex.test(username.value)== false) {
    
    username.style.border="1px solid red";
    error = "<small>Name is required and should have alphabet letters only</small>";
    document.getElementById('usernameError').innerHTML = error
    return false;
}else{
    username.style.border="1px solid green";
    document.getElementById('usernameError').innerHTML = "";
}
 }