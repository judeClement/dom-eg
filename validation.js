var name1=document.getElementById('name');
var phno=document.getElementById('number');
var pswd=document.getElementById('password');
var err1=document.getElementById('err1');
var err2=document.getElementById('err2');
var err3=document.getElementById('err3');

function validate() {
    var nameregexp=/^([a-zA-Z\s]+)$/;
    var phnregexp=/^([0-9]+)$/;
    var pswdregexp=/^([a-zA-Z0-9]+)$/;
    let valid=true;

    if (nameregexp.test(name1.value)) {
        err1.innerText="valid"
        err1.style.color="green";

    } else {
        err1.innerText="invalid"
        err1.style.color="red";
        return valid=false;
    }
if (phnregexp.test(phno.value)) {
    err2.innerText="valid"
    err2.style.color="green";

} else {
    err2.innerText="invalid"
    err2.style.color="red";
    return valid=false;
}

if (pswdregexp.test(pswd.value)) {
    err3.innerText="valid"
    err3.style.color="green";

} else {
    err3.innerText="invalid"
    err3.style.color="red";
    return valid=false;
}
return valid;
}
