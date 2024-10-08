

gsap.registerPlugin(ScrollTrigger);


gsap.to(".imageClip", {
  duration: 2,
  clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
  scrollTrigger: {
    trigger: ".imageClip",
    start: "top 80%",     
    end: "top 30%",       
    scrub: .5,          
    
  }
});
