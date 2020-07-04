var burger=document.querySelector(".hamburger");
var menu=document.querySelector(".nav-links");
var alllinks=document.querySelectorAll(".nav-links li");

var modal=document.querySelector(".modal");
var previews=document.querySelectorAll(".image-container img");
var modal_img=document.querySelector(".full-img");
var modal_caption=document.querySelector(".caption");

burger.addEventListener("click",function(){
    menu.classList.toggle("open");

    for(i=0; i<alllinks.length;i++)
    {
        alllinks[i].classList.toggle('fade')
    }
});

//display modal with images
for(i=0; i<previews.length; i++)
{
    previews[i].addEventListener("click",display);
}
function display(event)
{
    clicked_img=event.target;
    //console.log(clicked_img)

    img_src=clicked_img.getAttribute("data-original");
    img_caption=clicked_img.alt;

    modal_img.src=`Desktop_Images/${img_src}`;
    modal_caption.textContent=img_caption;

    modal.classList.add("open");
    modal_img.classList.add("open");

}

//close modal
modal.addEventListener("click",goBack);

function goBack(event)
{
    if(event.target.classList.contains("modal"))
    {
        modal.classList.remove("open");
        modal_img.classList.remove("open");
    }
}