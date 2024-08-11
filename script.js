
function homePageAnimation(){
    gsap.set(".slidesm",{scale: 5})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start:"top top",
        end: "bottom end",
        pin: true,
        scrub: 2
    },
});
tl
.to(".vdio",{
    '--golu': "0%",
    ease: Power2,
},'x')
.to(".slidesm",{
    scale: 1,
    ease: Power2,
},'x')
.to(".lft",{
    xPercent: -5,
    stagger: 0.3,
    ease: Power4,
},'b')
.to(".rgt",{
    xPercent: 5,
    stagger: 0.3,
    ease: Power4,
},'b')
}

// gsap.to(".slides",{
//     scrollTrigger: {
//         trigger: ".prize",
//         start: "top top",
//         end: "bottom bottom",
//         markers: true,
//         scrub: 1
//     },
//     xPercent: -200,
//     ease: Power4.ease
    
// })

homePageAnimation();

const VideoID=document.getElementById('video');
VideoID.playbackRate=0.5;

const letters="abcdefghijklmnoqprstuvwxyz";
let interval=null;

const name=document.querySelectorAll(".name a");
const hack=document.querySelector(".active-text");

name.forEach((item,index)=>{
    item.onmouseover=()=>{
        name.forEach(item=>{item.classList.remove('active-text')});
        item.classList.add('active-text');
        let iteration=0;
        clearInterval(interval);
        interval=setInterval(()=>{
            item.innerText=item.innerText
            .split("")
            .map((letter,index)=>{
                if(index<iteration){
                    return item.dataset.value[index];
                }
                return letters[Math.floor(Math.random()*26)]
            })
            .join("");
            if(iteration>=item.dataset.value.length){
                clearInterval(interval);
            }
            iteration+=1 / 3;
    
        },30
    );
    }
})

// Popup Script

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});
document.querySelector("#close-btn").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});


gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded",function(){
    const sections = gsap.utils.toArray('section');
    let scrollTween =gsap.to(sections,{
        xPercent:-100*(sections.length-1),
        ease:"none",
        scrollTrigger:{
            trigger:'.wrapper-new',
            pin:true,
            scrub:0.5,
            snap:1/(sections.length-1),
            start:'top top',
            end:3000,
        }
    })
    gsap.to(".line",{
        height:'10rem',
        scrollTrigger:{
            trigger:'.line',
            scrub:0.5,
            start:'center center',
            end:2000,
        }
    })

    document.querySelectorAll('.image-new').forEach(el=>{
        gsap.to(el.querySelector('.caption'),{
            x:0,
            y:0,
            scrollTrigger:{
                containerAnimation:scrollTween,
                trigger:el.querySelector('.caption'),
                start:'top bottom',
                end:'+=1000',
                scrub:0.5,
            }
        })
        gsap.to(el.querySelector('.quote'),{
            y:0,
            ease:'none',
            scrollTrigger:{
                containerAnimation:scrollTween,
                trigger:el.querySelector('.quote'),
                start:'top botttom',
                end:'+=20%',
                scrub:0.5,
            }
        })
        gsap.to(el.querySelector('.block'),{
            x:0,
            ease:'none',
            scrollTrigger:{
                containerAnimation:scrollTween,
                trigger:el.querySelector('.block'),
                start:'top bottom',
                end:'+='+window.innerWidth,
                scrub:0.5,
            }
        })
        gsap.to(el.querySelector('.image-new img'),{
            y:0,
            ease:'none',
            scrollTrigger:{
                containerAnimation:scrollTween,
                trigger:el.querySelector('.block img'),
                start:'top bottom',
                end:'+=50%',
                scrub:0.5,
            }
        })
        gsap.to(el.querySelector('.huge-text'),{
            y:0,
            ease:'none',
            scrollTrigger:{
                containerAnimation:scrollTween,
                trigger:el.querySelector('.huge-text'),
                start:'top bottom',
                end:'+=100%',
                scrub:0.5,
            }
        })
    })
});