const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const number=document.querySelector("#number");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

function validateform()
{
    clearMessages();
    errorflag=false;
    if(nameInput.value.length<1)
    {
        errorNodes[0].innerText="Name cannot be blank";
        nameInput.classList.add('error-border');
        errorflag=true;
    }
    if(email.value.length<1)
    {
        errorNodes[1].innerText="Email should be fill";
        nameInput.classList.add('error-border');
        errorflag=true;
    }
    if(emailIsvalid(email.value)=="false")
    {
        errorNodes[2].innerText="Invalid email";
        nameInput.classList.add('error-border');
        errorflag=true;

    }
    if(password.value.length<1)
        {
            errorNodes[3].innerText="enter your password";
            password.classList.add('error-border');
            errorflag=true;
        }
    if(number.value.length<1)
        {
            errorNodes[4].innerText="Enter valid number";
            number.classList.add('error-border');
            errorflag=true;
        }
        if(message.value.length<1)
            {
                errorNodes[5].innerText="please enter the message";
                message.classList.add('error-border');
                errorflag=true;
            }
             if(errorflag== false)
            {
                success.innerHTML="Form Validation Successfull"
            }
            
}
function emailIsvalid(email)
{
    let pattern=/\s+@\s+\.\s+/;
    return pattern.test(email);
}
function clearMessages()
{
    for(let i= 0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerText="";
    }
    success.innerText="";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    password.classList.remove("error-border");
    number.classList.remove("error-border");
    message.classList.remove("error-border");

}