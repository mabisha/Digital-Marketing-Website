let toggleBtn= document.querySelector(".toggle")
let menu= document.querySelector(".menu")
let closeBtn=document.querySelector(".close-btn")

toggleBtn.addEventListener("click",  function() {
  menu.classList.toggle("show-side-bar")
});

closeBtn.addEventListener("click",  function() {
    menu.classList.remove("show-side-bar")
  });
function myFunction() {
  var text;
  text = "We have recieved your message. We will contact you later";
  document.getElementById("myForm").style.display="none"
  document.getElementById("submit-message").innerHTML = text;

  document.getElementById("submit-message").style.backgroundColor= "rgb(6, 168, 6)";
  }
 