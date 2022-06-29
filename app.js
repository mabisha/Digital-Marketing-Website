let toggleBtn= document.querySelector(".toggle")
let menu= document.querySelector(".menu")
let closeBtn=document.querySelector(".close-btn")

toggleBtn.addEventListener("click",  function() {
  menu.classList.toggle("show-side-bar")
});

closeBtn.addEventListener("click",  function() {
    menu.classList.remove("show-side-bar")
  });

 
 