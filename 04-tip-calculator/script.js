let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount")
let errorMessage = document.getElementById("errorMessage");
let totalAmount = document.getElementById("totalAmount");

function calculateTip() {
    if (billAmount.value === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else if (percentageTip.value === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else {
        errorMessage.textContent = "";
        let calculatedTip = (parseInt(percentageTip.value) / 100) * parseInt(billAmount.value);
        let calculatedTotal = parseInt(billAmount.value) + calculatedTip;
        tipAmount.value = calculatedTip;
        totalAmount.value = calculatedTotal;


    }
}
