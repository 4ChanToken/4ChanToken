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
   showModalWithText('About 4ChanToken...', 
		'The 4Chan Token is the first PoR (Proof of Roll) token with a ' +
		'decentralized distribution mechanism.<br> ' +
      '<br>' +
		'The ditribution function is programmed inside the 4ChanToken ' +
		'smart contract, and each call derives a pseudo-random number ' +
		'which is used to give you 4Chan Tokens.<br> ' +
      '<br>' +
		'For each rolled number, all the digits at the end that are equal ' +
		'represent the amount of tokens that are assigned to the caller ' +
		'(The number zero equals to 10).<br><br>' +
		'Some example rolls:<br>' + 
	   '<table><tr><th>Number Rolled</th><th>Tokens Obtained</th></tr>' +
      '<tr><td>1234<em>5</em></td><td>5 4CH tokens</tr>' +
      '<tr><td>4321<em>0</em></td><td>10 4CH tokens</tr>' +
      '<tr><td>761<em>44</em></td><td>44 4CH tokens</tr>' +
      '<tr><td>12<em>000</em></td><td>1000 4CH tokens</tr>' +
		'</table>' +
      '<br>' +
		'The largest quantity of tokens that can be rolled is 100,000, ' +
		'which requires <em>00000</em> to be rolled.<br> ' +
      '<br>' +
		'With all this in mind, we don\'t have control over who calls the ' +
		'smart-contract or how many tokens are assigned to each person that rolls.<br>' +
      '<br>' +
      'The contract does NOT receive any ethereum and will reject any amount sent to it.<br>' +
      'Don\'t send any transaction with Gas Price above \'Current Gas Price Limit\'.<br>' +
      'Your transaction will fail if you do so.'
      , 'help');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == document.getElementById('infoModal')) {
      hideModal();
   }
}
