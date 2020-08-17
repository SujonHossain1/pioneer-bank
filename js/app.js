const loginSection = document.querySelector(".login-section");
const form = document.forms['login'];
const transaction = document.querySelector("#transaction-area");

const currentDeposit = document.querySelector("#currentDeposit");
const currentWithdraw = document.querySelector("#currentWithdraw");
const currentBalance = document.querySelector("#currentBalance");

let depositValue = 0;
let withdrawValue = 0;
let currentBalanceValue = 1240;

// login form disable and transaction unable;
form.addEventListener('submit', (event) => {
    loginSection.style.display = "none";
    transaction.style.display = "block";
    event.preventDefault();
})

// deposit amount 
const depositInput = document.getElementById("deposit-input");
const depositBtn = document.getElementById("deposit-btn");

depositBtn.addEventListener("click", function () {
    let value = depositInput.value;
    if (value.trim().length <= 0) {
        alert("Empty Field Not Allow !");
    } else {
        depositValue = depositValue + parseInt(value);
        currentBalanceValue += depositValue;
        currentDeposit.innerText = depositValue;
        currentBalance.innerText = currentBalanceValue;
        depositInput.value = "";
    }
})
// withdraw amount
const withdrawInput = document.getElementById("withdraw-input");
const withdrawBtn = document.getElementById("withdraw-btn");

withdrawBtn.addEventListener("click", function () {
    let value = withdrawInput.value;
    if (value.trim().length <= 0) {
        alert("Empty Field Not Allow !");
    } else {
        withdrawValue += parseInt(value);
        currentBalanceValue -= withdrawValue;
        currentWithdraw.innerText = withdrawValue;
        currentBalance.innerText = currentBalanceValue;
        withdrawInput.value = "";
    }


})

// set value in span 
currentDeposit.innerText = depositValue;
currentWithdraw.innerText = withdrawValue;
currentBalance.innerText = currentBalanceValue;

