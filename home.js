// add money

document.getElementById('btn-add-money').addEventListener('click',function(event){
    
    // prevent page reload after form submit
    event.preventDefault();
    console.log('add money button clicked');

    // grt money to be added
    const addMoney = document.getElementById('input-add-money').value;
    console.log('money to be added:', addMOney);
    
    // get the pin number provided
    const pinNUmber = document.getElementById('input-pin-input').value;
    console.log('pin number:', pinNUmber);
});
