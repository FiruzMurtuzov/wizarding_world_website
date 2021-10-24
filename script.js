const lol = Math.floor(Math.random() * 3);
if(lol==0){
    document.querySelector('.background').src="./carachteer_pictures/HPRM-final-banner-no-text.jpg";
}if(lol==1){
    document.querySelector('.background').src="./carachteer_pictures/hogwarts.jpg";
}if(lol==2){
    document.querySelector('.background').src="./carachteer_pictures/hogwarts2.jpg";
}





const  nav = document.querySelector('nav');
const head = document.querySelector('.head');
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1 , stagger: 0.25 });
tl.to(".next", { y: "-100%",display:"none", duration: 1.5, delay: 1 });
tl.to(".intro", { y: "-100%",display:"none", duration: 1 }, "-=1");
tl.fromTo("body",{overflowY:"hidden"},{overflowY:"visible",duration:1})



const tk = gsap.timeline({ defaults: { ease: "power1.out" } });
tk.fromTo(".background",{transform:"scale(1.1)"},{transform:"scale(1)", duration: 6,delay:4});
tk.fromTo(".heading", { opacity: 0 ,y:"15%"}, { opacity: 1,y:"0%",duration: 2},"-=4");
tk.fromTo(".underTitle", { opacity: 0 ,y:"15%"}, { opacity: 1,y:"0%",duration: 2 },"-=3");
tk.fromTo(".underUnderTitle", { opacity:0,y:"15%"}, { opacity:1,y:"0%",duration: 3},"-=1");


const books = gsap.timeline({ defaults: { ease: "power1.out" } });
window.addEventListener('scroll',()=>{
    if(window.scrollY>5){
        nav.classList.add('nav2')
        head.classList.add('head2')
        if(aviableColor==1){
            document.querySelector('.head2').style.backgroundColor="rgb(100, 0, 20)"
            document.querySelector('.nav2').style.backgroundColor="rgb(49, 0, 10)"
           
        }
        if(aviableColor==2){
            document.querySelector('.head2').style.backgroundColor="#242633"
            document.querySelector('.nav2').style.backgroundColor="#10141b"
           
        }
        if(aviableColor==3){
            document.querySelector('.head2').style.backgroundColor="rgb(42, 83, 0)"
            document.querySelector('.nav2').style.backgroundColor="rgb(17, 34, 0)"
           
        }
        if(aviableColor==4){
            document.querySelector('.head2').style.backgroundColor="rgb(0, 78, 114)"
            document.querySelector('.nav2').style.backgroundColor="rgb(0, 64, 94)"
           
        }
        if(aviableColor==5){
            document.querySelector('.head2').style.backgroundColor="rgb(120, 122, 0)"
            document.querySelector('.nav2').style.backgroundColor="rgb(117, 100, 0)"
           
        }
       
    }else{
        nav.classList.remove('nav2')
        head.classList.remove('head2')
        nav.style.background="none"
        head.style.background="none"
    }
    if(window.scrollY>800 && window.scrollY<802){
      
    }
})
var statusColor  = 0;
const colors = document.querySelector('.colorBox')
const colorPicker = document.querySelector('.colorChanger');
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const darkBlue = document.querySelector('.darkblue')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

colorPicker.addEventListener('click',()=>{
    if(statusColor==0){
colors.style.opacity="1";
statusColor=1;
    }else{
        colors.style.opacity="0"
        statusColor=0;
    }
})

const Allcolors = ["red","blue","darkblue","yellow","green"];
let aviableColor = 2;

red.addEventListener('click',() =>{
    colors.style.opacity="0";
statusColor=0;
colorPicker.style.backgroundColor="rgb(100, 0, 20)"
aviableColor=1;
document.querySelector('body').style.backgroundColor="rgb(100, 0, 20)"
document.getElementsByTagName('button').classList.add('reda');
})
blue.addEventListener('click',() =>{
    colors.style.opacity="0";
statusColor=0;
aviableColor=4;
colorPicker.style.backgroundColor="rgb(0, 103, 151)"
document.querySelector('body').style.backgroundColor="rgb(0, 78, 114)"
})
green.addEventListener('click',() =>{
    colors.style.opacity="0";
statusColor=0;
aviableColor=3;
colorPicker.style.backgroundColor="rgb(42, 83, 0)"
document.querySelector('body').style.backgroundColor="rgb(42, 83, 0)"
})
yellow.addEventListener('click',() =>{
    colors.style.opacity="0";
statusColor=0;
aviableColor=5;
colorPicker.style.backgroundColor="rgb(199, 169, 0)"
document.querySelector('body').style.backgroundColor="rgb(177, 180, 0)"
})
darkBlue.addEventListener('click',() =>
{
 colors.style.opacity="0";
 statusColor=0;
colorPicker.style.backgroundColor="#242633"
document.querySelector('body').style.backgroundColor="#10141b"
aviableColor=2;
})
