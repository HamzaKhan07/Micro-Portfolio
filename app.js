var burger=document.querySelector(".hamburger");
var menu=document.querySelector(".nav-links");
var alllinks=document.querySelectorAll(".nav-links li");

var texts=["Websites","Games","Applications","Programs"];
var count=0;
var index=0;
var text='';
var letter=''

(function typing()
{
    burger.addEventListener("click",function(){
        menu.classList.toggle("open");
    
        for(i=0; i<alllinks.length;i++)
        {
            alllinks[i].classList.toggle('fade')
        }
    });
    
    if(count==texts.length)
    {
        count=0;
    }
    text=texts[count];
    letter=text.slice(0,++index);

    document.querySelector(".typer").innerText=letter;

    if(text.length==letter.length)
    {
        count++;
        index=0;
    }
    setTimeout(typing,400);
}());

