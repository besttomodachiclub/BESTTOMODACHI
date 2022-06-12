const media = document.querySelector('#media_box');
const link_rel = document.querySelectorAll('.links');
const nav = document.querySelector('#nav');
const question = document.querySelectorAll('.question');
const plus = document.querySelectorAll('.down');
const ans = document.querySelectorAll('.answer');

window.addEventListener('scroll' , ()=>{
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
    {
        media.classList.remove('deactive');
        media.classList.add('social_media_pos');
    }
    else if(document.body.scrollTop < 500 || document.documentElement.scrollTop < 500){
        media.classList.remove('social_media_pos');
        media.classList.add('deactive');
        // console.log("Dj");
    }
});


var lastScrollTop = 0;

window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    {
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop){
            //console.log("Down scroolll");
            nav.classList.add('nav_fixed');
        } else {
            // upscroll code
            // console.log("up scroll");
            nav.classList.remove('nav_fixed');
        }
        lastScrollTop = st <= 0 ? 0 : st; 
    } 
    else{
        nav.classList.add('nav_fixed');
    }
}, false);

let progress = document.getElementById('progressbar');
let totalheight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progress_hi = (window.pageYOffset  / totalheight) * 100;
    progress.style.height = progress_hi + '%';
}

var check  = new Array(plus.length).fill(true);

for(let i = 0;i<question.length; i++)
{
    question[i].addEventListener('click'  , ()=>{
        if(check[i] == true)
        {
            ans[i].classList.remove('deactive');
            plus[i].innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
            ans[i].classList.add('fading');
            check[i] = false;
        }
        else if(check[i] == false)
        {
            plus[i].innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
            ans[i].classList.add('deactive');
            check[i] = true;
        }
    })
}