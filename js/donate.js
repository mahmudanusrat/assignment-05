function showModal() {
    document.getElementById("congrats-modal").classList.remove("hidden");
}
  
  function closeModal() {
    document.getElementById("congrats-modal").classList.add("hidden");
}

  function alertModal() {
    document.getElementById("alert-modal").classList.remove("hidden");
  }
  function alertCloseModal() {
    document.getElementById("alert-modal").classList.add("hidden");
  }


document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("alert-close-modal").addEventListener("click", alertCloseModal);

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
function myDonation(addMoneyId, donationId) {
  const addMoney = getInputFieldValueId(addMoneyId);

  if (isNaN(addMoney) || addMoney <= 0) {
    alertModal();
    return;
  }
  const balance = getTextFieldValueId("my-balance");
  const donation = getTextFieldValueId(donationId);

  if (addMoney > balance) {
   alertModal();
   return;
  }
  const newBalance = balance - addMoney;
  const totalDonation = addMoney + donation;
  document.getElementById("my-balance").innerText = newBalance;
  const p = document.createElement('p');
  p.innerText= ` 
  Added: ${addMoney} tk.
  `;
  
  document.getElementById('history-container').appendChild(p);
  
  document.getElementById(donationId).innerText = totalDonation;

  showModal();
}

//
document
  .getElementById("btn-donate-now")
  .addEventListener("click", function (event) {
    event.preventDefault();
    myDonation("input-add-money", "total-donation");  
  });

document
  .getElementById("btn-donate-now2")
  .addEventListener("click", function (event) {
    event.preventDefault();

    myDonation("input-add-money2", "total-donation2");
  });

document
  .getElementById("btn-donate-now3")
  .addEventListener("click", function (event) {
    event.preventDefault();

    myDonation("input-add-money3", "total-donation3");
  });
