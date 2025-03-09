document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const pinInput = document.querySelector("input[placeholder='Enter Pin']").value;
   
    const convertedPin=parseInt(pinInput);

    if (accountNumber.length === 11) {

      if (convertedPin === 1234) {
        // console.log("okey tikh ache");
        window.location.href="./main.html"
      } 
      else {
        alert("pin tikh nai");
      }
    } 
    else {
      alert("need valid acount number");
    }
  });









































// document
//   .getElementById("login-btn")
//   .addEventListener("click", function (event) {
//     // console.log(event);
//     event.preventDefault();

//     const accountNumber = document.getElementById("account-number").value;
//     const pin = document.getElementById("pin").value;
//     const convertedPin = parseInt(pin);
//     // console.log(accountNumber.length);
//     console.log(typeof pin);
//     if (accountNumber.length === 11) {
//       if (convertedPin === 1234) {
//         console.log("okey tikh ache");
//       } else {
//         console.log("pin thik nai");
//       }
//     } else {
//       console.log("need valid account number");
//     }
//   });

// document.addEventListener('click', function(event ){
//     console.log("clicked Element:", event.srcElement);
// });

// document.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "yellow";
// });

// document.addEventListener("click", function(event){
//     if(event.target.tagName === "BUTTON"){
//         console.log("A button was clicked!");
//     }
// });

// document.getElementById("parent").addEventListener("click", function(event){
//     // console.log("Target:", event.target);
//     console.log("Current Target:", event.currentTarget);
// });

// document.addEventListener("click", function(event){
//     console.log(event.view);
// });

// document.addEventListener("keydown", function(event) {
//     console.log("Event View:", event.view); // Output: Window {...}
// });

// document.addEventListener("click", function(event) {
//     let win = event.view;
//     console.log("Window Width:", win.innerWidth);
// });

// document.addEventListener('click', function(event){
//     let win = event.view;
//     console.log("window Width:", win.innerWidth);
// });

// document.addEventListener("keydown", function(event) {
//     console.log("Event View:", event.view); // Output: Window {...}
// });

// // alert ডায়ালগ দেখানো
// window.alert("Hello, World!");

// fetch API ব্যবহার করে ডেটা আনয়ন
// window.fetch("https://api.example.com/data")
// //   .then(response => response.json())
// //   .then(data => console.log(data));

// // localStorage এ ডেটা স্টোর করা
// window.localStorage.setItem("name", "John Doe");

// // location ব্যবহার করে নতুন URL এ নেভিগেট করা
// window.location.href = "https://www.google.com";
