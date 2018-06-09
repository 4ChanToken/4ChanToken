function showSnackbarMessage(message) {
   // Get the snackbar DIV
   var x = document.getElementById("snackbar");
   x.innerHTML = message
   // Add the "show" class to DIV
   x.className = "show";
   // After 3 seconds, remove the show class from DIV
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function showLoadingTx() {
   // Get the snackbar DIV
   var x = document.getElementById("load");
   x.style.display = "block";
}

function hideLoadingTx() {
   // Get the snackbar DIV
   var x = document.getElementById("load");
   x.style.display = "none";
}

function showModalWithText(title, txt, type) {
   var modal = document.getElementById('infoModal');
   var modalcontent = document.getElementById('infoModalContent');

   if(type=='error') {
      modalcontent.style.backgroundColor = "#FFD9EF";
   } else {
      modalcontent.style.backgroundColor = "#D5D9EF";
   }

   modalcontent.class = "modal-content animated fadeInUp"

   var modalTitle = document.getElementById("modalTitle");
   var modalText = document.getElementById("modalText");
   modalTitle.innerHTML = title;
   modalText.innerHTML = txt;
   modal.style.display = "block";

   var x = document.getElementById("load");
   if (type == 'loading') {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }

   var span = document.getElementsByClassName("close");

   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
      var modal = document.getElementById('infoModal');
      modal.style.display = "none";
   }

}

function hideModal() {
   var modal = document.getElementById('infoModal');
   modal.style.display = "none";
}

function showHelpModal() {
   showModalWithText('What is this?', 'This is a token', 'help');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == document.getElementById('infoModal')) {
      hideModal();
   }
}
