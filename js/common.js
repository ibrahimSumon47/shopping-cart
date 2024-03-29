function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const phoneNumberString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneNumberString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {

    const currentPhoneTotal = getTextElementValueById("phone-total");
    const currentCaseTotal = getTextElementValueById("case-total");
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById("sub-total", currentSubTotal);

    const taxAmountString =( currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById("tex-amount", taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById("final-total", finalAmount);
}