gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".imageClip").forEach((image) => {
  gsap.to(image, {
    ease: "linear",
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    scrollTrigger: {
      trigger: image,
      start: "bottom 90%", 
      end: "bottom top", 
      scrub: 1,
    },
  });
});
