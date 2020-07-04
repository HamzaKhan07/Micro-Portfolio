var burger=document.querySelector(".hamburger");
var menu=document.querySelector(".nav-links");
var alllinks=document.querySelectorAll(".nav-links li");

burger.addEventListener("click",function(){
    menu.classList.toggle("open");

    for(i=0; i<alllinks.length;i++)
    {
        alllinks[i].classList.toggle('fade')
    }
});