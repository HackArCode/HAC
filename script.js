
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