window.addEventListener('load', () => {
  const Preload = document.querySelector('.preloader');
  Preload.classList.add('preload-finish');
})


//Horizontal scrolling animation using gsap scrolltrigger plugin
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
tl.from('.hero-text h1', {opacity: 0, duration: 0.8, y: -60, delay: 1.5 });
tl.from('.hero-text p', {opacity: 0 , duration: 1, delay: 0.3, x: -200});
tl.from('.watch-btn', {opacity: 0 , duration: 1, ease: "power3.out", y: 200});

tl.to('.img-col', {scaleY: 1, duration: 1, height: '100vh', ease: Circ.easeOut });
tl.to('.img-box', {opacity: 1, duration: 2, ease: Power2.easeOut, delay: 1})

//video played on click on homepage
const watchBtn = document.querySelector('.watch-btn');
const videoContainer = document.querySelector('.video-container');
const videoPlay = document.querySelector('video');
const closeBtn = document.querySelector('.close');

watchBtn.addEventListener('click', ()=> {
  gsap.to('.video-container', {duration: 2, opacity: 1, ease: Power2.easeOut});
  videoContainer.classList.toggle('active');
  videoPlay.pause();
  videoPlay.currentTime = 0;
})

closeBtn.addEventListener('click', ()=> {
  videoContainer.classList.toggle('active');
})
//navigation button code

const navigation = document.querySelector('.navigation');
const eachSection = document.querySelectorAll('.panel');
const navigationList = document.querySelectorAll('.navigation li');
 const windowHeight = window.innerHeight;

 //A function that removes the selected class and disables the scale property
function reset() {
  for(var i = 0; i < navigation.children.length; i++){
    navigation.children[i].classList.remove('selected');
  }
}

window.addEventListener('scroll', function(){
  const scrollLeft = window.scrollY;
 
  eachSection.forEach(function(section, i){
    //offsetLeft returns the left position of an object including the padding
if(section.offsetLeft < scrollLeft + windowHeight/2 && scrollLeft < section.offsetLeft + windowHeight/2){
  reset();
  navigation.children[i].classList.add('selected');
}
  });
});

navigationList.forEach(function(item, i){
  item.addEventListener('click', function(){
    window.scrollTo({
      top: i * windowHeight,
      behavior: 'smooth'
    })
  })
});