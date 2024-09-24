function showHistoryById(id) {
    document.getElementById("donation-cards").classList.add("hidden");
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
  
  }
  
document.getElementById('btn-donation').addEventListener('click', function(event){
    showHistoryById('donation-cards')
});
document.getElementById('btn-history').addEventListener('click', function(event){
    showHistoryById('history-container')
});
