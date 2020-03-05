//=======coefficients==========

const k1 = 0.1;
const k2 = 0.2;
const k3 = 0.25;
const k4 = 0.3;
const k5 = 0.35;
const k6 = 0.4;
const k7 = 0.45;

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
const indicator26 = document.querySelector("#ind26");
const indicator27 = document.querySelector("#ind27");
const indicator28 = document.querySelector("#ind28");
const indicator29 = document.querySelector("#ind29");
const indicator30 = document.querySelector("#ind30");
const indicator31 = document.querySelector("#ind31");
const indicator32 = document.querySelector("#ind32");
const indicator33 = document.querySelector("#ind33");
const indicator34 = document.querySelector("#ind34");
const indicator35 = document.querySelector("#ind35");
const indicator36 = document.querySelector("#ind36");
const indicator37 = document.querySelector("#ind37");
const indicator38 = document.querySelector("#ind38");
const indicator39 = document.querySelector("#ind39");
const indicator40 = document.querySelector("#ind40");
const indicator41 = document.querySelector("#ind41");
const indicator42 = document.querySelector("#ind42");
const indicator43 = document.querySelector("#ind43");
const indicator44 = document.querySelector("#ind44");
const indicator45 = document.querySelector("#ind45");
const indicator46 = document.querySelector("#ind46");
const indicator47 = document.querySelector("#ind47");
const indicator48 = document.querySelector("#ind48");
const indicator49 = document.querySelector("#ind49");
const indicator50 = document.querySelector("#ind50");
const indicator51 = document.querySelector("#ind51");
const indicator52 = document.querySelector("#ind52");
const indicator53 = document.querySelector("#ind53");
const indicator54 = document.querySelector("#ind54");
const indicator55 = document.querySelector("#ind55");
const indicator56 = document.querySelector("#ind56");
const indicator57 = document.querySelector("#ind57");
const indicator58 = document.querySelector("#ind58");
const indicator59 = document.querySelector("#ind59");
const indicator60 = document.querySelector("#ind60");
const indicator61 = document.querySelector("#ind61");
const indicator62 = document.querySelector("#ind62");
const indicator63 = document.querySelector("#ind63");
const indicator64 = document.querySelector("#ind64");
const indicator65 = document.querySelector("#ind65");
const indicator66 = document.querySelector("#ind66");
const indicator67 = document.querySelector("#ind67");
const indicator68 = document.querySelector("#ind68");

let textAmount1 = document.querySelector(".criteria_amount1");
let textAmount2 = document.querySelector(".criteria_amount2");
let textAmount3 = document.querySelector(".criteria_amount3");
let textAmount4 = document.querySelector(".criteria_amount4");
let textAmount5 = document.querySelector(".criteria_amount5");
let textAmount6 = document.querySelector(".criteria_amount6");
let textAmount7 = document.querySelector(".criteria_amount7");
let textAmount8 = document.querySelector(".criteria_amount8");
let textAmount9 = document.querySelector(".criteria_amount9");
let textAmount10 = document.querySelector(".criteria_amount10");
let textAmount11 = document.querySelector(".criteria_amount11");
let textAmount12 = document.querySelector(".criteria_amount12");
let textAmount13 = document.querySelector(".criteria_amount13");
let textAmount14 = document.querySelector(".criteria_amount14");
let textAmount15 = document.querySelector(".criteria_amount15");
let textAmount16 = document.querySelector(".criteria_amount16");
let textAmount17 = document.querySelector(".criteria_amount17");
let textAmount18 = document.querySelector(".criteria_amount18");
let textAmount19 = document.querySelector(".criteria_amount19");
let textAmount20 = document.querySelector(".criteria_amount20");


const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");
const form4 = document.querySelector(".form4");
const form5 = document.querySelector(".form5");
const form6 = document.querySelector(".form6");
const form7 = document.querySelector(".form7");
const form8 = document.querySelector(".form8");
const form9 = document.querySelector(".form9");
const form10 = document.querySelector(".form10");
const form11 = document.querySelector(".form11");
const form12 = document.querySelector(".form12");
const form13 = document.querySelector(".form13");
const form14 = document.querySelector(".form14");
const form15 = document.querySelector(".form15");
const form16 = document.querySelector(".form16");
const form17 = document.querySelector(".form17");
const form18 = document.querySelector(".form18");
const form19 = document.querySelector(".form19");
const form20 = document.querySelector(".form20");



function calculateProfit1(e) {
    e.preventDefault()
    const profitValue = Number(indicator1.value * k4) + Number(indicator2.value * k6) + Number(indicator3.value * k4);

    textAmount1.value = profitValue.toFixed(2);

}

function calculateProfit2(e) {
    e.preventDefault()
    const profitValue = Number(indicator4.value * k3) + Number(indicator5.value * k2) + Number(indicator6.value * k3) +
        Number(indicator7.value * k4);

    textAmount2.value = profitValue.toFixed(2);

}

function calculateProfit3(e) {
    e.preventDefault()
    const profitValue = Number(indicator8.value * k5) + Number(indicator9.value * k2) + Number(indicator10.value * k3) +
        Number(indicator11.value * k2);

    textAmount3.value = profitValue.toFixed(2);

}

function calculateProfit4(e) {
    e.preventDefault()
    const profitValue = Number(indicator12.value * k4) + Number(indicator13.value * k5) + Number(indicator14.value * k5);

    textAmount4.value = profitValue.toFixed(2);

}

function calculateProfit5(e) {
    e.preventDefault()
    const profitValue = Number(indicator15.value * k5) + Number(indicator16.value * k4) + Number(indicator17.value * k3) +
        Number(indicator18.value * k1);

    textAmount5.value = profitValue.toFixed(2);

}
function calculateProfit6(e) {
    e.preventDefault()
    const profitValue = Number(indicator19.value * k6) + Number(indicator20.value * k4) + Number(indicator21.value * k4);

    textAmount6.value = profitValue.toFixed(2);

}
function calculateProfit7(e) {
    e.preventDefault()
    const profitValue = Number(indicator22.value * k5) + Number(indicator23.value * k3) + Number(indicator24.value * k2) +
        Number(indicator25.value * k2);

    textAmount7.value = profitValue.toFixed(2);

}
function calculateProfit8(e) {
    e.preventDefault()
    const profitValue = Number(indicator26.value * k5) + Number(indicator27.value * k5) + Number(indicator28.value * k4);

    textAmount8.value = profitValue.toFixed(2);

}
function calculateProfit9(e) {
    e.preventDefault()
    const profitValue = Number(indicator29.value * k4) + Number(indicator30.value * k2) + Number(indicator31.value * k3) +
        Number(indicator32.value * k3);

    textAmount9.value = profitValue.toFixed(2);

}
function calculateProfit10(e) {
    e.preventDefault()
    const profitValue = Number(indicator33.value * k5) + Number(indicator34.value * k5) + Number(indicator35.value * k4);

    textAmount10.value = profitValue.toFixed(2);

}
function calculateProfit11(e) {
    e.preventDefault()
    const profitValue = Number(indicator36.value * k3) + Number(indicator37.value * k2) + Number(indicator38.value * k4) +
        Number(indicator39.value * k3);

    textAmount11.value = profitValue.toFixed(2);

}
function calculateProfit12(e) {
    e.preventDefault()
    const profitValue = Number(indicator40.value * k2) + Number(indicator41.value * k4) + Number(indicator42.value * k4) +
        Number(indicator43.value * k2);

    textAmount12.value = profitValue.toFixed(2);

}
function calculateProfit13(e) {
    e.preventDefault()
    const profitValue = Number(indicator44.value * k5) + Number(indicator45.value * k5) + Number(indicator46.value * k4);

    textAmount13.value = profitValue.toFixed(2);

}
function calculateProfit14(e) {
    e.preventDefault()
    const profitValue = Number(indicator47.value * k4) + Number(indicator48.value * k5) + Number(indicator49.value * k5);

    textAmount14.value = profitValue.toFixed(2);

}
function calculateProfit15(e) {
    e.preventDefault()
    const profitValue = Number(indicator50.value * k5) + Number(indicator51.value * k2) + Number(indicator52.value * k2) +
        Number(indicator53.value * k3);

    textAmount15.value = profitValue.toFixed(2);

}
function calculateProfit16(e) {
    e.preventDefault()
    const profitValue = Number(indicator54.value * k3) + Number(indicator55.value * k4) + Number(indicator56.value * k7);

    textAmount16.value = profitValue.toFixed(2);

}
function calculateProfit17(e) {
    e.preventDefault()
    const profitValue = Number(indicator57.value * k6) + Number(indicator58.value * k5) + Number(indicator59.value * k3);

    textAmount17.value = profitValue.toFixed(2);

}
function calculateProfit18(e) {
    e.preventDefault()
    const profitValue = Number(indicator60.value * k4) + Number(indicator61.value * k4) + Number(indicator62.value * k6);

    textAmount18.value = profitValue.toFixed(2);

}
function calculateProfit19(e) {
    e.preventDefault()
    const profitValue = Number(indicator63.value * k6) + Number(indicator64.value * k5) + Number(indicator65.value * k3);

    textAmount19.value = profitValue.toFixed(2);

}
function calculateProfit20(e) {
    e.preventDefault()
    const profitValue = Number(indicator66.value * k5) + Number(indicator67.value * k5) + Number(indicator68.value * k4);

    textAmount20.value = profitValue.toFixed(2);

}


function calculateAmountActiveCriteria(e) {
    const amountAll = Number(textAmount1.value) + Number(textAmount3.value) + Number(textAmount5.value) +
        Number(textAmount7.value) + Number(textAmount9.value)+ Number(textAmount11.value) + Number(textAmount13.value) +
        Number(textAmount15.value) + Number(textAmount17.value)+ Number(textAmount19.value);
    amount1.value = amountAll.toFixed(2);

}
function calculateAmountCognitiveCriteria(e) {
    const amountAll = Number(textAmount2.value) + Number(textAmount4.value) + Number(textAmount6.value) +
        Number(textAmount8.value) + Number(textAmount10.value)+ Number(textAmount12.value) + Number(textAmount14.value) +
        Number(textAmount16.value) + Number(textAmount18.value)+ Number(textAmount20.value);
    amount2.value = amountAll.toFixed(2);

}

let amount1 = document.querySelector('.form-amount1');
let amount2 = document.querySelector('.form-amount2');
const btnCalc1 = document.querySelector(".btn_amount1");
const btnCalc2 = document.querySelector(".btn_amount2");


form1.addEventListener("submit", calculateProfit1);
form2.addEventListener("submit", calculateProfit2)
form3.addEventListener("submit", calculateProfit3)
form4.addEventListener("submit", calculateProfit4)
form5.addEventListener("submit", calculateProfit5)
form6.addEventListener("submit", calculateProfit6);
form7.addEventListener("submit", calculateProfit7)
form8.addEventListener("submit", calculateProfit8)
form9.addEventListener("submit", calculateProfit9)
form10.addEventListener("submit", calculateProfit10)
form11.addEventListener("submit", calculateProfit11);
form12.addEventListener("submit", calculateProfit12)
form13.addEventListener("submit", calculateProfit13)
form14.addEventListener("submit", calculateProfit14)
form15.addEventListener("submit", calculateProfit15)
form16.addEventListener("submit", calculateProfit16);
form17.addEventListener("submit", calculateProfit17)
form18.addEventListener("submit", calculateProfit18)
form19.addEventListener("submit", calculateProfit19)
form20.addEventListener("submit", calculateProfit20)


btnCalc1.addEventListener('click', calculateAmountActiveCriteria);
btnCalc2.addEventListener("click", calculateAmountCognitiveCriteria);