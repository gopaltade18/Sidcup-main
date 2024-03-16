gsap.to("#nav",{
    backgroundColor:"#000",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller :"body",
        // markers:true,
        start:" top -10%",
        end:"top -11%",
        scrub:2
    }

})
var crsr=document.querySelector("#cursor")
var crsrb=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
   crsr.style.left=dets.x +"px"
   crsr.style.top=dets.y+"px"
   crsrb.style.left=dets.x-200+"px"
   crsrb.style.top=dets.y-200+"px"
})
var h4ALL=document.querySelectorAll("#nav h4")
h4ALL.forEach(function(element){
   element.addEventListener("mouseenter",function(){
    crsr.style.scale=3
    crsr.style.border="1px solid #fff"
    crsr.style.backgroundColor="transparent"
   })
   element.addEventListener("mouseleave",function(){
    crsr.style.scale=1
    crsr.style.border="0px solid #95c11e"
    crsr.style.backgroundColor="#95c11e"
   })
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -80%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})
gsap.from(".card",{
   scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 65%",
        end:"top 35%",
        scrub:4
    }

})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 65%",
        end:"top 35%",
        scrub:4
    }

})