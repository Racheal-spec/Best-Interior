

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  //x: () => -(sections.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    //invalidateOnRefresh: true,
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector('.wrapper').offsetWidth
  }
});

let tl = gsap.timeline({
  //delay: 0.5,
  scrollTrigger: {
    trigger:'.panel',
    //start: "bottom center",
  }, 
});

tl.from('.logo', {opacity: 0 , duration: 1, x: -50});
tl.from('.hero-text h1', {opacity: 0, duration: 0.8, y: -60 });
tl.from('.hero-text p', {opacity: 0 , duration: 1, x: -200});
tl.from('.watch-btn', {opacity: 0 , duration: 1, ease: "power3.out", y: 200});
//tl.from('.about-section img', {opacity: 0, y: 100, duration: 1.5} )
//tl.from('.about-text', {opacity: 0, y: 300, duration: 1} )

tl.from('.about-section img', {
  opacity: 1,
  x: 100,
  duration: 1,
  ease: "power2.out"
})
tl.from('.about-text', {
  opacity: 1,
  y: -50,
  duration: 1,
  ease: "power2.out"
})

/****Home Page animation */
 let watchBtn = document.querySelector('.watch-btn');
watchBtn.addEventListener('click', function(){

  console.log('watched');
  TweenMax.to('.video-col', 1 , {scaleY: 1, height: '100vh', ease: Circ.easeOut });
  TweenMax.to('.box', 2 , {opacity: 1, scale:1, ease: Elastic.easeOut, delay: 1})
})