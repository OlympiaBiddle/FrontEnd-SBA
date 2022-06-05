
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/* Form validation the Login page */

function validateForm() {
    let x =  document.forms["loginForm"]["username"].value
    let y =  document.forms["loginForm"]["password"].value

    if (x == "" || y == "") {
      alert("Username and Password must be filled out");
      return false;
    }   
  }

  

  // let login_details = [];
  // const addDetails = (ev)=> {
  //     ev.preventDefault();  //to stop the form submitting
  //     let loginDetail = {
  //         id: Date.now(),
  //         username: document.getElementById('username').value,
  //         password: document.getElementById('password').value 
  //     }
  //     login_details.push(loginDetail);
  //      document.forms[0].reset();// to clear the form for the next entries
  //      //document.querySelector('form').reset();
  //     //for display purposes only
  //     console.warn('added', {login_details});
  //     textContent = '\n' + JSON.stringify(login_details, '\t', 2);
  //     //alert(textContent);
  //     //saving to local storage
  // }
  // document.addEventListener('DOMContentLoaded', ()=>{
  //     document.getElementById('btn').addEventListener('click', addDetails);
  // });