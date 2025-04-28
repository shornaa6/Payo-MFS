// console.log("button clicking file added")

document.getElementById("button-login").addEventListener("click:",function(){
console.log("button clicked")

})

document.getElementById("button-login").addEventListener("click:",function(event){
  event.preventDefault();
  console.log("button clicked")
    
    

const phoneNUmber = document.getElementById("phone-number").value;
console.log(phoneNUmber);
})
    