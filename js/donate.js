function showModal() {
    document.getElementById("congrats-modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("congrats-modal").style.display = "none";
  }
  
  document.getElementById("close-modal").addEventListener("click", closeModal);
  
function getInputFieldValueId(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
function getTextFieldValueId(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}
function myDonation(addMoneyId, donationId){
    const addMoney = getInputFieldValueId(addMoneyId);

    if (isNaN(addMoney) || addMoney<=0) {
        alert("Please enter correct amount");
        return;
      }
      const balance = getTextFieldValueId("my-balance");
    const donation = getTextFieldValueId(donationId);

    if(addMoney > balance){
        alert('Insufficient balance')
    }
    const newBalance = balance - addMoney;
    const totalDonation = addMoney + donation;
    document.getElementById("my-balance").innerText = newBalance;
    document.getElementById(donationId).innerText = totalDonation;

    showModal();
  
}

document
  .getElementById("btn-donate-now")
  .addEventListener("click", function (event) {
    event.preventDefault();
myDonation('input-add-money', 'total-donation');
});

document
  .getElementById("btn-donate-now2")
  .addEventListener("click", function (event) {
    event.preventDefault();

    myDonation('input-add-money2', 'total-donation2');
});

document
  .getElementById("btn-donate-now3")
  .addEventListener("click", function (event) {
    event.preventDefault();

    myDonation('input-add-money3', 'total-donation3');
});
