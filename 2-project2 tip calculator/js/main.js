//inputs
const amountInput = document.getElementById('amountInput');
const tipInput = document.getElementById('tipInput');
const calcBtn = document.getElementById('btnTip');
const billField= document.getElementById('billField');


calcBtn.addEventListener('click', function(){
    let totalBill = tipCalc();

    console.log(totalBill);

    billField.innerHTML=`total: ${totalBill.toFixed(2)}`;

})


function tipCalc(){
    let amountValue = Number(amountInput.value);
    let tipValue = Number(tipInput.value);
    let total = amountValue + amountValue*(tipValue/100);

    return total;
}