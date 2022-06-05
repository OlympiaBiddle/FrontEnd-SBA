
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


let customers = [];
//example {fullName: Olympia Biddle, email: osb399@yahoo.com, userName: B.980_ddle, password: BUiedu103, age:}
const addCustomer = (ev)=> {
    ev.preventDefault();  //to stop the form submitting
    let customer = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        dob: document.getElementById('birthday').value,
        eMail: document.getElementById('email').value,
        userName: document.getElementById('username').value,
        passWord: document.getElementById('password').value 
    }
    customers.push(customer);
     document.forms[0].reset();// to clear the form for the next entries
     //document.querySelector('form').reset();
    //for display purposes only
    console.warn('added', {customers});
    let pre = document.querySelector('#msg pre');
    textContent = '\n' + JSON.stringify(customers, '\t', 5);
    alert(textContent);
    //saving to local storage
}
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click', addCustomer);
});