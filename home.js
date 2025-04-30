// add money

document.getElementById('btn-add-money').addEventListener('click',function(event){
    
    // prevent page reload after form submit
    event.preventDefault();
    console.log('add money button clicked');

    // grt money to be added
    const addMoney = document.getElementById('input-add-money').value;
    console.log('money to be added:', addMoney);
    
    // get the pin number provided
    const pinNUmber = document.getElementById('input-pin-number').value;

    console.log('pin number:', pinNUmber);
    
    if(pinNUmber === '1234'){
        console.log('pin number is correct');

        const accountBalance = document.getElementById('account-balance').innerText;
        console.log(typeof accountBalance); 

        // add moneyInput with balance
        const addMoneyNumber = parseFloat(addMoney);
        const balance = parseFloat(accountBalance);
        const newBalance = addMoneyNumber + balance;
        console.log('new balance:', newBalance);

        // update the account balance ui/dom
        document.getElementById('account-balance').innerText = newBalance ;


    }

    else{
        alert('pin number is incorrect');
    }

   
});
