document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const pinInput = document.querySelector("input[placeholder='Enter Pin']").value;
   
    const convertedPin=parseInt(pinInput);

    if (accountNumber.length === 11) {

      if (convertedPin === 1234) {
      
        window.location.href="./main.html"
      } 
      else {
        alert("pin tikh nai");
      }
    } 
    else {
      alert("need valid account number");
    }
  });
