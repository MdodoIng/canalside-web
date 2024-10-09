gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".imageClip").forEach((image) => {
  gsap.to(image, {
    ease: "power2.out",
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    
    scrollTrigger: {
      trigger: image,
      start: "bottom 90%", 
      end: "bottom top", 
      scrub: 0.5,    
      invalidateOnRefresh: true,
    },
  });
});
