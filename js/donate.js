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

function donateName(name) {
  const donateName = document.getElementById(name).innerText;
  return donateName;
}

function myDonation(addMoneyId, donationId, nameId) {
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

  const p = donateName(nameId);
  const div = document.createElement("div");
  div.innerHTML = ` 
  <div class="p-8 space-y-4 border border-[#1111111A] mb-4 rounded-lg">
   <p class="text-xl font-bold text-[#111111]">${addMoney} Taka is ${p} .</p>
    <p class="text-base font-light text-[#111111B3]">Date: ${new Date()} </p>
  </div>
  `;

  document.getElementById("history-container").appendChild(div);
  document.getElementById(donationId).innerText = totalDonation;
  showModal();
}

document
  .getElementById("btn-donate-now")
  .addEventListener("click", function (event) {
    event.preventDefault();
    myDonation("input-add-money", "total-donation", "donate-name");
  });

document
  .getElementById("btn-donate-now2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    myDonation("input-add-money2", "total-donation2", "donate-name1");
  });

document
  .getElementById("btn-donate-now3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    myDonation("input-add-money3", "total-donation3", "donate-name2");
  });