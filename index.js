
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
  
}
window.onscroll = () =>{
    navbar.classList.remove('active');
   
}
function colorLinks(hex)
{
    var links = document.getElementsByTagName("a");
    for(var i=0;i<6;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
}




   
let header=document.querySelector('#header');
let image=document.querySelector('#image')

   window.addEventListener('scroll',()=>{
   if (window.scrollY>60){
    image.src ='image/logo-white.png';
    colorLinks("#ffca3d");
 
       header.classList.add('active');
   }else{
    
   
    colorLinks("#0a2b5e");

       header.classList.remove('active');
       image.src ='image/logo1.png'
   }
   })
  