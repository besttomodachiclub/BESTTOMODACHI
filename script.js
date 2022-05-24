const next_button = document.querySelector('.next_button');
const font_color_change = document.querySelectorAll('[font_change]');
const nav = document.querySelector('.nav');
next_button.addEventListener('mouseenter',()=>{
    next_button.classList.add("hover_next_button");
});

next_button.addEventListener('mouseleave',()=>{
    next_button.classList.remove("hover_next_button");
});

window.addEventListener('scroll' , ()=>{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.setAttribute("style" , "background: linear-gradient(240deg, #900740, #08bbf6);");
        font_color_change.forEach((e) =>{
            e.setAttribute("style", "color : rgb(255,255,255);");
        });
    }
    else if(document.body.scrollTop < 50 || document.documentElement.scrollTop < 50){
        nav.setAttribute("style" , "background: transparent;");
        font_color_change.forEach((e) =>{
            e.setAttribute("style", "color : #08bbf6;");
        })
    }
});

console.log("workibg")