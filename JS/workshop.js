
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
        link.classList.remove('current');
    })
    items[idx].classList.add('current')
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




// swipe
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

// Element to detect swipe on
const swipeArea = document.querySelector('.carousel-container');

swipeArea.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
});

swipeArea.addEventListener("touchmove", (event) => {
  // Prevent default scrolling during swipe
  event.preventDefault();
});

swipeArea.addEventListener("touchend", (event) => {
  endX = event.changedTouches[0].clientX;
  endY = event.changedTouches[0].clientY;

  const diffX = endX - startX;
  const diffY = endY - startY;

  // Determine the direction
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      console.log("Swipe Right");
    } else {
      console.log("Swipe Left");
    }
  } else {
    if (diffY > 0) {
      console.log("Swipe Down");
    } else {
      console.log("Swipe Up");
    }
  }
});

