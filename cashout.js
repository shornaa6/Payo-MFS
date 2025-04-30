document.getElementById('btn-cash-out')
.addEventListener('click', function(event) {
    event.preventDefault(); 
    console.log('Cash out button clicked');

    const cashoutAmount  = document.getElementById('input-cashout').value;
    const cashOutNbr = parseFloat(cashoutAmount);
    const pinNUmber = document.getElementById('cash-out-pin').value;
    console.log(pinNUmber, cashoutAmount);

    if (pinNUmber === '1234'){
        if (cashOutNbr > balanceNumber) {
            alert('Insufficient balance. You cannot cash out more than your available balance.');
            return; // Stop execution
        }
        const accountBalances = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(accountBalances);
        const newBalances = balanceNumber - cashOutNbr;

        document.getElementById('account-balance').innerText = newBalances;      
    }
    else{
        alert('Pin number is incorrect');
    }
});
