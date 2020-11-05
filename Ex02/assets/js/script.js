function checkPassword() {
let password = document.getElementById('password').value;
let passwordConfirm = document.getElementById('passwordConfirm').value;
 
if(password == passwordConfirm)
{
    document.getElementById('password').className = "pwd green"
    document.getElementById('passwordConfirm').className = "pwdConfirm green";

}
else
{
    document.getElementById('password').className = "pwd red";
    document.getElementById('passwordConfirm').className = "pwdConfirm red";

}
}