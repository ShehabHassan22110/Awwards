let over =document.getElementById("over")
function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  document.getElementById("main").style.marginLeft = "220px";
  over.style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  over.style.display = "none";

}
  

let nameInput=document.getElementById("name")
let emailInput=document.getElementById("email")
let passwordInput=document.getElementById("password")
let signUpBtn =document.getElementById("signUp")
let alertAll =document.getElementById("alertAll")
let alert1 =document.getElementById("alert1")
let alert2 =document.getElementById("alert2")
let alert3 =document.getElementById("alert3")
let welcomeName=document.getElementById("welcomeName")
let logBtn = document.getElementById("logBtn")
let indexOfUser;
let error;

let users;
if(localStorage.getItem("usersList")==null)
{
    users=[];
}
else
{
    users=JSON.parse(localStorage.getItem("usersList"))
}

/*---For Sign UP---*/
// signUpBtn.addEventListener("click",signUp)
function signUp ()
{
    if(noIteration()!=true)
    {
        if(checkNameInput()==true &&checkEmailInput()==true&&checkPasswordInput()==true)
        { 
            let user={
            name:nameInput.value,
            email:emailInput.value,
            password:passwordInput.value,
            }
            users.push(user)
            localStorage.setItem("usersList",JSON.stringify(users))
            successResetInputs ()
        }
        else
        {
            wrongAlert ()
        }
    }
    else
    {
       wrongAlert ()
    }

}
function wrongAlert ()
{
    alertAll.classList.replace("d-none","d-block")
    alertAll.classList.add("text-danger")
    alert1.classList.replace("d-block","d-none")
    alert2.classList.replace("d-block","d-none")
    alert3.classList.replace("d-block","d-none")
    alertAll.innerHTML=error;
     // nameInput.classList.remove("is-invalid")
    // emailInput.classList.remove("is-invalid")
    // passwordInput.classList.remove("is-invalid")
}
function successResetInputs ()
{
    alertAll.classList.replace("d-none","d-block")
    alertAll.classList.add("text-success")
    alertAll.classList.remove("text-danger")
    alertAll.innerHTML="Success"
    nameInput.classList.remove("is-valid")
    emailInput.classList.remove("is-valid")
    passwordInput.classList.remove("is-valid")
    nameInput.value=""
    emailInput.value=""
    passwordInput.value=""
}

/*---Sign UP Validation---*/
// nameInput.addEventListener("keyup", checkNameInput)
function checkNameInput()
{
let regex =/^[A-Z][A-Za-z 1-9]{0,}$/

    if(regex.test(nameInput.value)==true)
    {
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        alert1.classList.replace("d-block","d-none")
        return true
    }
    else 
    {
        nameInput.classList.add("is-invalid")
        nameInput.classList.remove("is-valid")
        alert1.classList.add("d-block")
        alert1.innerHTML="Enter Valid Name (Start With Capital)"
        error ="Enter Valid Name (Start With Capital)"
        return false
    }
}
// emailInput.addEventListener("keyup", checkEmailInput)
function checkEmailInput()
{
let regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(regex.test(emailInput.value)==true)
    {
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        alert2.classList.replace("d-block","d-none")
        return true
    }
    else 
    {
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
        alert2.classList.add("d-block")
        alert2.innerHTML="Enter Valid Email (contain letters@Letters.Letters)"
        error ="Enter Valid Email (contain @Letters.Letters)"
        return false
    }
}
// passwordInput.addEventListener("keyup",checkPasswordInput)
function checkPasswordInput()
{
let regex =/^[A-Za-z0-9][A-Za-z0-9]{0,}$/
//\s\S To Match Anything
    if(regex.test(passwordInput.value)==true)
    {
       passwordInput.classList.add("is-valid")
       passwordInput.classList.remove("is-invalid")
       alert3.classList.replace("d-block","d-none")
        return true
    }
    else 
    {
        passwordInput.classList.add("is-invalid")
        passwordInput.classList.remove("is-valid")
        alert3.classList.add("d-block")
        alert3.innerHTML="Enter Password contain only Letters And Numbers "
        error ="Enter Password contain only Letters And Numbers "
        return false
    }

}
/*---Prevent Signup With Same Eamil---*/
function noIteration()
{
    for(let i= 0 ; i<users.length;i++)
    {
        if(users[i].email.toLowerCase()==emailInput.value.toLowerCase())
        {
            error = `Email Already Exist`
            return true ;
        }
        else
        {
            error = `Email Not Found`

        }
      
    }
}
/////////////////////////////////////
/*---To log In---*/

// logBtn.addEventListener("click",logIn)
function logIn()
{
    if(localStorage.getItem("usersList")!=null)
    {
        if(validateEmail()==true&&validatePassword()==true)
        {
            window.location.href = "index.html"
            localStorage.setItem("userName",users[indexOfUser].name)
        }
        else
        {
            alertAll.classList.replace("d-none","d-block")
            alertAll.classList.add("text-danger")
            alertAll.innerHTML=error;
        }
    }
    else
    {
        alertAll.classList.replace("d-none","d-block")
        alertAll.classList.add("text-danger")
        alertAll.innerHTML="You Must Register First";
    }
       
}
function validateEmail()
{
     
    for(let i=0 ; i<users.length;i++)
    {
        if(users[i].email.toLowerCase()==emailInput.value.toLowerCase())
        {
            indexOfUser=i;
            return true;
        }
        else
        {
            error = `This Email Doesn't Exist`
        }
    }
   
}
function validatePassword ()
{   
    for(let i=0 ; i<users.length;i++)
    {
        if(users[i].password==passwordInput.value)
        {
            return true;
        }
        else
        {
            error = `Incorrect Password`
        }
    }
}
////////////////////////////
/*-----Home-----*/