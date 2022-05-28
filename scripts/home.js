const media = document.querySelector('#media_box');
const link_rel = document.querySelectorAll('.links');
const nav = document.querySelector('#nav');

window.addEventListener('scroll' , ()=>{
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
    {
        media.classList.remove('deactive');
        media.classList.add('social_media_pos');
    }
    else if(document.body.scrollTop < 500 || document.documentElement.scrollTop < 500){
        media.classList.remove('social_media_pos');
        media.classList.add('deactive');
        console.log("Dj");
    }
});


var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      console.log("Down scroolll");
      nav.classList.add('nav_fixed');
   } else {
      // upscroll code
      console.log("up scroll");
      nav.classList.remove('nav_fixed');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


