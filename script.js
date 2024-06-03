// smooth scrolling
// gsap 
// scrolltrigger
var timeout;
const scroll = new LocomotiveScroll({
    el:document.querySelector('#main'), 
    smooth:true,
})
function fristPageAnimation(){
  var tl = gsap.timeline();
  tl.from("#nav",{
    y: '-10',
    opacity:0,
    duration: 1.5,
    ease:Expo.easeInOut
  })
  .to(".boundingelem",{
    y: 0,
    ease:Expo.easeInOut,
    duration: 2,
    delay:-1,
    stagger:.2
  })
  .from("#herofooter",{
    y: -10,
    opacity:0,
    duration:1.5,
    delay:-1,
    ease:Expo.easeInOut
  })
}



function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){

    // console.log(dets.clientX ,dets.clientY );
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px ,${dets.clientY}px)`
    })
}
circleMouseFollower();
fristPageAnimation();

// document.querySelectorAll(".elem").forEach(function(elem){
//   var rotate = 0;
//   var diffrot = 0;
//   elem.addEventListener("mouseleave",function(dets){
//     var diff = dets.clientY - elem.getBoundingClientRect().top;
//     diffrot =rotate- dets.clientX ;
//     rotate = dets.clientX - rotate;
//     gsap.to(elem.querySelector("img"),{
//       opacity:1,
//       ease:Power3,
//       top:diff,
//       left:dets.clientX,
//       rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//     });
//   })
// });


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});