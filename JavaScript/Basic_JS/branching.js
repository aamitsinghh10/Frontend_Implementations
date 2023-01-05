var priceofphone=42000, bankbalance=40000,creditlimit=60000;

if(priceofphone<bankbalance){
    console.log('All Ok,proceed');
}
else if(priceofphone < creditlimit){
    console.log('Proceed with the transaction');
}
else{
    console.log('Sorry you do not have suffiecient balance');
}
console.log('Transaction Over');

var chocolate='Hersheys',quantity;
switch(chocolate){
    case 'dairy milk':
        quantity=5;
        break;
    case 'Hersheys':
        quantity=50;
        break;
    case 'tablerone':
        quantity=1;
        break;
    default:
        quantity=2;            
}
console.log(quantity);