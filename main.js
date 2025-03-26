//let navbar = document.querySelector(".nav-link");
//let navCollapse = document.querySelector("navbar-collapse.collapse");
//navbar.forEach(function (a) {
  //a.addEventListner("click",function(){
    //navCollapse.classList.remove("show");
  //})
///l}

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() =>{
      current += increment;
      obj.textContent = current;
      if(current == end){
        clearInterval(timer);
      }
    }, step);
  }
  counter("count1", 0 ,5757, 37900);
  counter("count2", 100 ,5757, 2500);
  counter("count3", 0 ,111, 1200);
  counter("count4", 0 ,5780, 7900);
});

var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
},  
    breakpoints: {
        '991' : {
          slidesPerView : 5,
            spaceBetween : 10,
    },      
        '767' : {
            slidesPerView : 3,
            spaceBetween : 10,
        },
        '320': {
            slidesPerView : 2,
            spaceBetween : 8,
        },
      },
    });         