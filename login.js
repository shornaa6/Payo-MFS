// console.log("button clicking file added")

// document.getElementById("button-login")
// .addEventListener("click", function() {
//   console.log("button clicked");
// });



document.getElementById("button-login")
.addEventListener("click:",function(event){
  event.preventDefault();
//   console.log("button clicked")
    
    

const phoneNUmber = document.getElementById("phone-number").value;
const Pinnumber = document.getElementById("pin-number").value;
console.log(phoneNUmber, Pinnumber);

if (phoneNUmber === "5" || Pinnumber === "1234") {
    console.log("you are logged in");
    window.location.href = "/home.html";
} else {
    alert("invalid phone number or pin number");
  }
})
