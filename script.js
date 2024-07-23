
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
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el)=>observer.observe(el));

const VideoID=document.getElementById('video');
VideoID.playbackRate=0.5;

