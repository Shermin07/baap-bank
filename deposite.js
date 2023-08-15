document.getElementById("btn-deposite").addEventListener('click', function(){
    
    const depositeField = document.getElementById("deposite-field");
    const newDepositeAmountString = depositeField.value ;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    //console.log(newDepositeAmount);


    const depositeTotalElement = document.getElementById("deposite-total");
    const previousDepositeTotalSting = depositeTotalElement.innerText ;
    const previousDepositeTotal = parseFloat(previousDepositeTotalSting);

    //console.log(previousDepositeTotal);

    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount ;
    depositeTotalElement.innerText = currentDepositeTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;





    depositeField.value = " ";
 })