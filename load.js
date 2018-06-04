const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')
const BigNumber = require('bignumber.js')

var metamaskloadevent = new Event('metamaskload');

var abi =  [
         {
                  "anonymous": false,
                  "inputs": [
                              {
                                             "indexed": true,
                                             "name": "tokenOwner",
                                             "type": "address"
                                          },
                              {
                                             "indexed": true,
                                             "name": "spender",
                                             "type": "address"
                                          },
                              {
                                             "indexed": false,
                                             "name": "tokens",
                                             "type": "uint256"
                                          }
                           ],
                  "name": "Approval",
                  "type": "event"
               },
         {
                  "constant": false,
                  "inputs": [],
                  "name": "acceptOwnership",
                  "outputs": [],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "constant": false,
                  "inputs": [
                              {
                                             "name": "tokens",
                                             "type": "uint256"
                                          }
                           ],
                  "name": "addToPot",
                  "outputs": [
                              {
                                             "name": "success",
                                             "type": "bool"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "constant": false,
                  "inputs": [
                              {
                                             "name": "spender",
                                             "type": "address"
                                          },
                              {
                                             "name": "tokens",
                                             "type": "uint256"
                                          }
                           ],
                  "name": "approve",
                  "outputs": [
                              {
                                             "name": "success",
                                             "type": "bool"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "constant": false,
                  "inputs": [
                              {
                                             "name": "spender",
                                             "type": "address"
                                          },
                              {
                                             "name": "tokens",
                                             "type": "uint256"
                                          },
                              {
                                             "name": "data",
                                             "type": "bytes"
                                          }
                           ],
                  "name": "approveAndCall",
                  "outputs": [
                              {
                                             "name": "success",
                                             "type": "bool"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "constant": false,
                  "inputs": [],
                  "name": "roll",
                  "outputs": [],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "constant": false,
                  "inputs": [
                              {
                                             "name": "newblocklimit",
                                             "type": "uint256"
                                          }
                           ],
                  "name": "setBlockLimit",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "bool"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "constant": false,
                  "inputs": [
                              {
                                             "name": "newmaxdigits",
                                             "type": "uint8"
                                          }
                           ],
                  "name": "setMaxRollDigits",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "bool"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "constant": false,
                  "inputs": [
                              {
                                             "name": "gwei",
                                             "type": "uint256"
                                          }
                           ],
                  "name": "setMaxRollGwei",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "bool"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "constant": false,
                  "inputs": [
                              {
                                             "name": "newrollspercall",
                                             "type": "uint8"
                                          }
                           ],
                  "name": "setRollsPerCall",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "bool"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "constant": false,
                  "inputs": [
                              {
                                             "name": "to",
                                             "type": "address"
                                          },
                              {
                                             "name": "tokens",
                                             "type": "uint256"
                                          }
                           ],
                  "name": "transfer",
                  "outputs": [
                              {
                                             "name": "success",
                                             "type": "bool"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "anonymous": false,
                  "inputs": [
                              {
                                             "indexed": true,
                                             "name": "from",
                                             "type": "address"
                                          },
                              {
                                             "indexed": true,
                                             "name": "to",
                                             "type": "address"
                                          },
                              {
                                             "indexed": false,
                                             "name": "tokens",
                                             "type": "uint256"
                                          }
                           ],
                  "name": "Transfer",
                  "type": "event"
               },
         {
                  "anonymous": false,
                  "inputs": [
                              {
                                             "indexed": true,
                                             "name": "_from",
                                             "type": "address"
                                          },
                              {
                                             "indexed": true,
                                             "name": "_to",
                                             "type": "address"
                                          }
                           ],
                  "name": "OwnershipTransferred",
                  "type": "event"
               },
         {
                  "anonymous": false,
                  "inputs": [
                              {
                                             "indexed": true,
                                             "name": "to",
                                             "type": "address"
                                          },
                              {
                                             "indexed": false,
                                             "name": "rolledTokens",
                                             "type": "uint256"
                                          },
                              {
                                             "indexed": false,
                                             "name": "rolledNumber",
                                             "type": "uint24"
                                          }
                           ],
                  "name": "Rolled",
                  "type": "event"
               },
         {
                  "constant": false,
                  "inputs": [
                              {
                                             "name": "tokenAddress",
                                             "type": "address"
                                          },
                              {
                                             "name": "tokens",
                                             "type": "uint256"
                                          }
                           ],
                  "name": "transferAnyERC20Token",
                  "outputs": [
                              {
                                             "name": "success",
                                             "type": "bool"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "constant": false,
                  "inputs": [
                              {
                                             "name": "from",
                                             "type": "address"
                                          },
                              {
                                             "name": "to",
                                             "type": "address"
                                          },
                              {
                                             "name": "tokens",
                                             "type": "uint256"
                                          }
                           ],
                  "name": "transferFrom",
                  "outputs": [
                              {
                                             "name": "success",
                                             "type": "bool"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "constant": false,
                  "inputs": [
                              {
                                             "name": "_newOwner",
                                             "type": "address"
                                          }
                           ],
                  "name": "transferOwnership",
                  "outputs": [],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function"
               },
         {
                  "inputs": [],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "constructor"
               },
         {
                  "payable": true,
                  "stateMutability": "payable",
                  "type": "fallback"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "_totalSupply",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "uint256"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [
                              {
                                             "name": "tokenOwner",
                                             "type": "address"
                                          },
                              {
                                             "name": "spender",
                                             "type": "address"
                                          }
                           ],
                  "name": "allowance",
                  "outputs": [
                              {
                                             "name": "remaining",
                                             "type": "uint256"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [
                              {
                                             "name": "tokenOwner",
                                             "type": "address"
                                          }
                           ],
                  "name": "balanceOf",
                  "outputs": [
                              {
                                             "name": "balance",
                                             "type": "uint256"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "blocklimit",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "uint256"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "decimals",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "uint8"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [
                              {
                                             "name": "number",
                                             "type": "uint24"
                                          }
                           ],
                  "name": "getRolledTokensFromNumber",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "uint24"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "maxRollGasPrice",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "uint256"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "name",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "string"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "newOwner",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "address"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "owner",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "address"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "potAddress",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "address"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "potSupply",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "uint256"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "previousHash",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "uint256"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "prevRoller",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "address"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "rollMaxDigits",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "uint8"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "rollsPerCall",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "uint8"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "symbol",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "string"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               },
         {
                  "constant": true,
                  "inputs": [],
                  "name": "totalSupply",
                  "outputs": [
                              {
                                             "name": "",
                                             "type": "uint256"
                                          }
                           ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function"
               }
   ];
const contractAddress = '0x66501968FbF6CfB8E7d9Dffe97918D5A90Fa8458'
const potAddress = '0x0000000000000000000000000000000000000001'
const workingNetwork = "1";

var currentMaxDigits = 2;
var currentBlockLimit = 1;
const secondsPerBlock = 9;

function pad(n, width, z) {
   z = z || '0';
   n = n + '';
   return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function countDigitsEnd(txt) {
   var l;
   prevDigit = txt.substring(txt.length - 1, txt.length)
   for (l = txt.length - 1; l > 0; l--) {
      if (prevDigit != txt.substring(l - 1, l)) {
         break;
      }
   }
   if (l < 0)
      l = 0;
   var restTxt = txt.substring(0, l)
   var digits = txt.substring(l,txt.length)
   var count = txt.length - l
   return {'restTxt':restTxt, 'digits':digits, 'count':count }
}

function getResultText(length) {
   switch (length) {
      case 2:
         return 'you got <dubs>dubs</dubs>'
      case 3:
         return 'you got <trips>trips</trips>'
      case 4:
         return 'you got <quads>quads</quads>'
      case 5:
         return 'you got <quads>quints</quads>'
      case 6:
         return 'you got <quads>sexts</quads>'
      case 7:
         return 'you got <quads>septs</quads>'
      case 8:
         return 'you got <quads>octs</quads>'
      case 9:
         return 'you got <quads>nons</quads>'
   }

   return ''
}

function showSnackbarMessage(message) {
   // Get the snackbar DIV
   var x = document.getElementById("snackbar");
   x.innerHTML = message
   // Add the "show" class to DIV
   x.className = "show";
   // After 3 seconds, remove the show class from DIV
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

/* window.addEventListener('load', function() {
   var txHash = '0xea10039b5e38da95f98de9504cce2adb7827fdc21f85f32e064ee1a016210087'
   showSnackbarMessage("Transaction " + txHash + " sent")
});
*/

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


function showModalWithText(txt) {
   var modal = document.getElementById('myModal');
   var modalText = document.getElementById("modalText");
   modalText.innerHTML = txt;
   modal.style.display = "block";
}

var span = document.getElementsByClassName("close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
   var modal = document.getElementById('myModal');
   modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   var modal = document.getElementById('myModal');
   if (event.target == modal) {
      modal.style.display = "none";
   }
}

function getNetworkName(netId) {
   switch (netId) {
      case 1:
         return {'name':'MainNet','etherscan':'https://etherscan.io/'}
         
      case 2:
         return {'name':'Morden TestNet','etherscan':'https://morden.etherscan.io/'}
         
      case 3:
         return {'name':'Ropsten TestNet','etherscan':'https://ropsten.etherscan.io/'}
         
      case 4:
         return {'name':'Rinkeby TestNet','etherscan':'https://rinkeby.etherscan.io/'}
         
      case 42:
         return {'name':'Kovan TestNet','etherscan':'https://kovan.etherscan.io/'}
   }

   return {'name':'Unknown network','etherscan':'https://etherscan.io/'}

}

// Parses a data output that contains uint256, uint24
function parseLogDataOutput(logData) {
   // Remove the 0x at the start
   logData = logData.replace("0x", "")
   arg1str = logData.substring(0, 64)
   arg2str = logData.substring(64)
   arg1 = new BigNumber(arg1str, 16)
   arg2 = new BigNumber(arg2str, 16)
   return {'arg1':arg1, 'arg2':arg2}
}

function startApp(web3) {

   console.log('Starting App');
   const eth = new Eth(web3.currentProvider)
   const contract = new EthContract(eth)
   // const web3js = new Web3JS();

   const FourChanTokenContract = contract(abi)
   const FourChToken = FourChanTokenContract.at(contractAddress)
   console.log('created contract');

   const rollbutton = document.querySelector('button.rollButton')
   const remText = document.getElementById('remTokensText')
   const ownText = document.getElementById('yourTokensText')
   const gasText = document.getElementById('currentGasLimitText')
   const rollsText = document.getElementById('currentRollsText')

   function reloadOwnTokens() {
      FourChToken.balanceOf(web3.eth.accounts[0]).then(function (someoutput) {
         if ( typeof someoutput != 'undefined' ) {
            if ( typeof someoutput[0] != 'undefined' ) {
               result = BigNumber(someoutput[0]).div('1e18')
               ownText.innerHTML = 'Your tokens: ' + result.toNumber()
            }
         }
      }).catch(console.error)
   }

   function reloadRemTokens() {
      FourChToken.balanceOf(potAddress).then(function (someoutput) {
         if ( typeof someoutput != 'undefined' ) {
            if ( typeof someoutput[0] != 'undefined' ) {
               result = BigNumber(someoutput[0]).div('1e18')
               remText.innerHTML = 'Remaining tokens to distribute: ' + result.toNumber()
            }
         }
      }).catch(console.error)
   }

   function reloadGasText() {
      FourChToken.maxRollGasPrice().then(function (someoutput) {
         if ( typeof someoutput != 'undefined' ) {
            if ( typeof someoutput[0] != 'undefined' ) {
               result = BigNumber(someoutput[0]).div('1e9')
               gasText.innerHTML = 'Current Gas Price Limit: ' + result.toNumber() + ' Gwei'
            }
         }
      }).catch(console.error)
   }

   function reloadRollsText() {
      FourChToken.rollsPerCall().then(function (someoutput) {
         if ( typeof someoutput != 'undefined' ) {
            if ( typeof someoutput[0] != 'undefined' ) {
               result = BigNumber(someoutput[0])
               rollsText.innerHTML = 'Rolls per transaction: ' + result.toNumber()
            }
         }
      }).catch(console.error)
   }

   web3.version.getNetwork((err, netId) => {
      if (err) {
         console.log(err)
         return
      }

      try {
         netId = parseInt(netId)
      }
      catch(err) {
         netId = 0
      }


      
      if (netId != workingNetwork) {
         console.log('Error: You need to be logged to ' + getNetworkName(workingNetwork).name +
                      ' to run this contract. You are currently connected to ' + 
                      getNetworkName(netId).name)
         return
      }

      currentNetwork = getNetworkName(netId)

      console.log('Correctly connected to ' + currentNetwork.name)

      var a = document.getElementById('contractText')
      a.href = currentNetwork.etherscan + 'address/' + contractAddress
      a = document.getElementById('tradeText')
      a.href = 'https://etherdelta.com/#' + contractAddress + '-ETH'

      function logRollResults(txReceipt) {
         var logs = txReceipt.logs
         var outputText = '';
         var totalTokens = 0;
         for (l = 0; l < txReceipt.logs.length; l++) {
            var thisLogData = txReceipt.logs[l].data
            thisRolledResults = parseLogDataOutput(thisLogData)
            tokensRolled = thisRolledResults.arg1.div('1e18').toNumber()
            numberRolled = thisRolledResults.arg2.toNumber()
            totalTokens += tokensRolled

            numRolled = countDigitsEnd(pad(numberRolled, currentMaxDigits))

            outputText += "You rolled number " + numRolled.restTxt + '<em>' + 
                           numRolled.digits + '</em>';

            if (numRolled.count > 1) {
               outputText += ', ' + getResultText(numRolled.count)
            }

            if (tokensRolled == 1) {
               outputText += ", you get " + tokensRolled + " token";
            }
            else {
               outputText += ", you get " + tokensRolled + " tokens";
            }
            outputText += "<br>"
         }
         if ( txReceipt.logs.length > 1 ) {
            outputText += "Total tokens: " + totalTokens
         }
         showModalWithText(outputText);
      }

      async function waitForTxToBeMined (txHash) {
         let txReceipt
         let error
         while (!txReceipt) {
            try {
               txReceipt = await eth.getTransactionReceipt(txHash)
            } catch (err) {
               error = err
            }
         }
         if (!error) {
            showSnackbarMessage("Transaction " + txHash + " mined!")
            logRollResults(txReceipt)
            reloadOwnTokens()
         }
         if (currentBlockLimit == 1) {
            rollbutton.disabled = false;
         } else {
            setTimeout(function(){
               rollbutton.disabled = false;
            } , 1000 * secondsPerBlock * (currentBlockLimit - 1) );
         }
         reloadRemTokens()
         hideLoadingTx()
      }

      FourChToken.rollMaxDigits().then(function (someoutput) {
         if ( typeof someoutput != 'undefined' ) {
            if ( typeof someoutput[0] != 'undefined' ) {
               result = BigNumber(someoutput[0])
               currentMaxDigits = result.toNumber()
            }
         }
      }).catch(console.error)

      FourChToken.blocklimit().then(function (someoutput) {
         if ( typeof someoutput != 'undefined' ) {
            if ( typeof someoutput[0] != 'undefined' ) {
               result = BigNumber(someoutput[0])
               currentBlockLimit = result.toNumber()
            }
         }
      }).catch(console.error)

      reloadOwnTokens()
      reloadRemTokens()
      reloadGasText()
      reloadRollsText()

      rollbutton.addEventListener('click', function() {
         if (typeof web3.eth.accounts[0] != 'undefined') {
            FourChToken.roll({ from: web3.eth.accounts[0] })
               .then(function (txHash) {
                  rollbutton.disabled = true;
                  console.log('Transaction sent')
                  console.dir(txHash)
                  showSnackbarMessage("Transaction " + txHash + " sent")
                  showLoadingTx()
                  waitForTxToBeMined(txHash)
               })
               .catch(console.error)
         }
         else {
            console.log('Not logged in Metamask')
         }
      })

   })
   console.log('Added getNetwork callback');
};

var loadEventFunction = function() {
   console.log('Running load function');
   // Check if Web3 has been injected by the browser:
   if (typeof web3 !== 'undefined') {
      // You have a web3 browser! Continue below!
      console.log('Got web3js');
      metamask_enabled = true;
      web3js = new Web3(web3.currentProvider);
      startApp(web3js);
      window.dispatchEvent(metamaskloadevent);
   } else {
      // Warn the user that they need to get a web3 browser
      // Or install MetaMask, maybe with a nice graphic.
      console.log('No web3? You should consider trying MetaMask!');
      window.dispatchEvent(metamaskloadevent);
   }
};

console.log('Adding event listener')

window.addEventListener('load', loadEventFunction);


