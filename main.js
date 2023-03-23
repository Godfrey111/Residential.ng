const togglebtn  = document.querySelector('.hamburger');
const mobilemenu = document.querySelector('.mobile-menu');

togglebtn.addEventListener("click", () => {
    mobilemenu.classList.toggle('hidden');
})



/* let Signupbtn = document.getElementById("Signupbtn");
let Signinbtn = document.getElementById("Signinbtn");
let naffied = document.getElementById("naffied");
let title = document.getElementById("title");


Signinbtn.onclick = function(){
    naffied.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    Signupbtn.classList.add("disable");
    Signinbtn.classList.remove("disable");

} */