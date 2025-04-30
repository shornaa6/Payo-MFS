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


document.getElementById('button-login').addEventListener('click', function(event) {
  event.preventDefault(); // prevent form reload

  // Get user inputs
  const phone = document.getElementById('phone-number').value;
  const pin = document.getElementById('pin-number').value;

  // Simple login check (for demo)
  if (phone && pin === '1234') {
      // Open home.html in a new tab
      window.open('home.html', '_blank');
  } else {
      alert('Invalid phone number or PIN');
  }
});
