//=======coefficients==========

const k1 =0.1;
const k2 = 0.2;
const k3 = 0.3;
const k4= 0.4;
const k5 = 0.5;
const k6 = 0.6;
const k7 = 0.7;
const k8 = 0.8;
const k9 = 0.9;





//======indicators==========

const indicator1 = document.querySelector("#ind1");
const indicator2 = document.querySelector("#ind2");
const indicator3 = document.querySelector("#ind3");
const indicator4 = document.querySelector("#ind4");
const indicator5 = document.querySelector("#ind5");
const indicator6 = document.querySelector("#ind6");
const indicator7 = document.querySelector("#ind7");
const indicator8 = document.querySelector("#ind8");
const indicator9 = document.querySelector("#ind9");
const indicator10 = document.querySelector("#ind10");
const indicator11 = document.querySelector("#ind11");
const indicator12 = document.querySelector("#ind12");
const indicator13 = document.querySelector("#ind13");
const indicator14 = document.querySelector("#ind14");
const indicator15 = document.querySelector("#ind15");
const indicator16 = document.querySelector("#ind16");
const indicator17 = document.querySelector("#ind17");
const indicator18 = document.querySelector("#ind18");
const indicator19 = document.querySelector("#ind19");
const indicator20 = document.querySelector("#ind20");
const indicator21 = document.querySelector("#ind21");
const indicator22 = document.querySelector("#ind22");
const indicator23 = document.querySelector("#ind23");
const indicator24 = document.querySelector("#ind24");
const indicator25 = document.querySelector("#ind25");

let textAmount1 = document.querySelector(".criteria_amount1");
let textAmount2 = document.querySelector(".criteria_amount2");
let textAmount3 = document.querySelector(".criteria_amount3");
let textAmount4 = document.querySelector(".criteria_amount4");
let textAmount5 = document.querySelector(".criteria_amount5");
let amount = document.querySelector('.form-amount');
const btnCalc = document.querySelector(".btn_amount")


const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");
const form4 = document.querySelector(".form4");
const form5 = document.querySelector(".form5");



function calculateProfit1 (e) {
    e.preventDefault()    
    const profitValue = Number(indicator1.value*k2) + Number(indicator2.value*k2) + Number(indicator3.value*k2) +
    Number(indicator4.value*k2) + Number(indicator5.value*k2);
   
   textAmount1.value = profitValue.toFixed(2); 
   
}
function calculateProfit2 (e) {
    e.preventDefault()    
    const profitValue = Number(indicator6.value*k2) + Number(indicator7.value*k2) + Number(indicator8.value*k2) +
    Number(indicator9.value*k2) + Number(indicator10.value*k2);
   
   textAmount2.value = profitValue.toFixed(2); 
   
}
function calculateProfit3 (e) {
    e.preventDefault()    
    const profitValue = Number(indicator11.value*k2) + Number(indicator12.value*k2) + Number(indicator13.value*k2) +
    Number(indicator14.value*k2) + Number(indicator15.value*k2);
   
   textAmount3.value = profitValue.toFixed(2); 
   
}
function calculateProfit4 (e) {
    e.preventDefault()    
    const profitValue = Number(indicator16.value*k2) + Number(indicator17.value*k2) + Number(indicator18.value*k2) +
    Number(indicator19.value*k2) + Number(indicator20.value*k2);
   
   textAmount4.value = profitValue.toFixed(2); 
   
}
function calculateProfit5 (e) {
    e.preventDefault()    
    const profitValue = Number(indicator21.value*k2) + Number(indicator22.value*k2) + Number(indicator23.value*k2) +
    Number(indicator24.value*k2) + Number(indicator25.value*k2);
   
   textAmount5.value = profitValue.toFixed(2); 
   
}

function calculateAmount (e) {
    const amountAll = Number(textAmount1.value) + Number(textAmount2.value) + Number(textAmount3.value) 
    + Number(textAmount4.value) + Number(textAmount5.value);
    amount.value = amountAll.toFixed(2); 

}

form1.addEventListener("submit", calculateProfit1);
form2.addEventListener("submit", calculateProfit2)
form3.addEventListener("submit", calculateProfit3)
form4.addEventListener("submit", calculateProfit4)
form5.addEventListener("submit", calculateProfit5)
btnCalc.addEventListener('click', calculateAmount)

