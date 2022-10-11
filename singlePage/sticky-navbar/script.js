const navbarEl = document.querySelector(".navbar");
const BCEl = document.querySelector(".bottom-container");

window.addEventListener("scroll",function(){
    if(window.scrollY > BCEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }
    else{
        navbarEl.classList.remove("active");
    }
});