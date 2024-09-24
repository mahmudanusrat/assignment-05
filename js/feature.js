function showHistoryById(id) {
    document.getElementById("donation-cards").classList.add("hidden");
    document.getElementById('history-container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
  
  }
  
const btnDonation = document.getElementById('btn-donation');
const btnHistory = document.getElementById('btn-history');

btnDonation.addEventListener('click', function() {
    showHistoryById('donation-cards');
    toggleButtonColors(btnDonation, btnHistory);
});

btnHistory.addEventListener('click', function() {
    showHistoryById('history-container');
    toggleButtonColors(btnHistory, btnDonation);
});

function toggleButtonColors(activeBtn, inactiveBtn) {
    activeBtn.classList.add('bg-[#B4F461]');
    activeBtn.classList.remove('bg-white');

    inactiveBtn.classList.remove('bg-[#B4F461]');
    inactiveBtn.classList.add('bg-white');
};