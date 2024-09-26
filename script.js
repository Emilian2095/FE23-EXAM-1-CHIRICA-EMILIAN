
function changeSize(){
    const img = document.querySelectorAll(".swiper-slide")
    const btns = document.querySelectorAll(".btn");
    const container = document.querySelector(".swiper")

 btns.forEach((btn, i) => {
    btn.addEventListener("click",()=>{
        console.log(btns[i]);
        let imgs = document.querySelectorAll('.imgg')
        imgs[i].classList.add('ani')
        setTimeout(()=>{
            imgs[i].classList.remove('ani')

        }, 2000)

//  container.innerHTML +=
        
    })
  });
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
 
  changeSize()

  let prevBtn = document.querySelector('.swiper-button-prev')
  let nextBtn = document.querySelector('.swiper-button-next')
  let spans = document.querySelectorAll('.overlaySpan');
  nextBtn.addEventListener('click', ()=>{
   
    spans.forEach((span)=>{
        span.style.animation = 'none';
        span.offsetHeight; /* trigger reflow */
        span.style.animation = null;
        span.style.animation = "bounce 1s"
    })
  })

  prevBtn.addEventListener('click', ()=>{
   
    spans.forEach((span)=>{
        span.style.animation = 'none';
        span.offsetHeight; /* trigger reflow */
        span.style.animation = null;
        span.style.animation = "bounce 1s"
    })
  })