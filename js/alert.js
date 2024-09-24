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

