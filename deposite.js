document.getElementById("btn-deposite").addEventListener('click', function(){
    
    const depositeField = document.getElementById("deposite-field");
    const newDepositeAmountString = depositeField.value ;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    console.log(newDepositeAmount);
 })