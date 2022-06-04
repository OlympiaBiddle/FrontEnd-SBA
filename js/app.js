
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
    let x = document.forms["loginForm"]["username"].value;
    let y = document.forms["loginForm"]["password"].value;

    if (x == "" || y == "") {
      alert("Username and Password must be filled out");
      return false;
    }
     
  }