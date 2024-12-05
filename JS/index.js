let Layer1 = document.getElementById("Layer1");
let Layer2 = document.getElementById("Layer2");
let Layer3 = document.getElementById("Layer3");
let Layer4 = document.getElementById("Layer4");
let Layer5 = document.getElementById("Layer5");
let Layer6 = document.getElementById("Layer6");
let Layer7 = document.getElementById("Layer7");





window.addEventListener("scroll", () => {
    let value = window.scrollY;
        Layer2.style.left = `${(value) * -0.25}px`;
        Layer1.style.left = `${(value) * 0.25}px`;
        let scaleValue = 1 + (value / 3000);
        Layer6.style.transform = `scale(${scaleValue})`;
        Layer3.style.transform = `scale(${scaleValue})`;

    
});

/* 
==========
workshops
==========
 */

const carousel = document.querySelector('.carousel-container');
const quantity = document.querySelectorAll('.items').length;
const items = document.querySelectorAll('.items')
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const indexing = (i) => {
    let idx= i%quantity;
    if(idx<0){
        idx = idx*-1  
    }else if (idx>0){
        idx = 11-idx  
    }else{
        idx = 0;
    }
    return idx;
}

const currentSlide = (items, idx) => {
    items.forEach((link) => {
        link.classList.remove('active');
    })
    items[idx].classList.add('active')
}

let i =0;

next.addEventListener('click', () => {
    carousel.style.rotate = `${-(++i)*(360/quantity)}deg`;

    let index = indexing(i)
    currentSlide(items, index)


});

prev.addEventListener('click', () => {
    carousel.style.rotate = `${-(--i)*(360/quantity)}deg`

    let index = indexing(i)
    currentSlide(items, index)

     
})




