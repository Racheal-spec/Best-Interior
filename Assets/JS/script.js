
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  //x: () => -(sections.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector('.wrapper').offsetWidth
  }
});


/****Home Page animation */

let tl = gsap.timeline({
  scrollTrigger: {
    trigger:'.panel',
  }, 
});

tl.from('.logo', {opacity: 0 , duration: 1, x: -50});
tl.from('.hero-text h1', {opacity: 0, duration: 0.8, y: -60 });
tl.from('.hero-text p', {opacity: 0 , duration: 1, x: -200});
tl.from('.watch-btn', {opacity: 0 , duration: 1, ease: "power3.out", y: 200});



 let watchBtn = document.querySelector('.watch-btn');

watchBtn.addEventListener('click', function(){
  TweenMax.to('.video-col', 1 , {scaleY: 1, height: '100vh', ease: Circ.easeOut });
  TweenMax.to('.video-box', 2 , {opacity: 1, ease: Power2.easeOut, delay: 1})
})