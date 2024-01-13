var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });


 
  const box6 = document.querySelectorAll('.para6')
  const plus = document.querySelectorAll('.plus')
  let isActive = false
  
  plus.forEach((elem)=>{
      elem.addEventListener('click', (e)=>{
          box6.forEach((item)=>{
             
              if(elem.id == "plus1"){
                  if(item.id == 'para61'){
                      if(isActive == false){
                          item.style.display = 'block'
                          isActive =  true
                        }
                        else{
                          item.style.display = 'none'
                          isActive = false
                        }
                  }
                 
              }
              
              else if(elem.id == 'plus3'){
                  
                  if(item.id == 'para63'){
                      item.style.display = "block"
  
                  }
              }
              else if(elem.id == 'plus2'){
                  
                  if(item.id == 'para62'){
                      item.style.display = "block"
  
                  }
              }
              else if(elem.id == 'plus4'){
  
                  if(item.id == 'para64'){
                      item.style.display = "block"
  
                  }
              }
                  
          })
      })
  })
  


  const getStrted = document.querySelector('#get-started')
  const icon = document.querySelector('#iconTop')
  const iconBottom = document.querySelector('#iconBottom')
  const btnBottom = document.querySelector('#btnBottom')

  console.log(icon);


  getStrted.addEventListener('mouseenter', (e)=>{
  icon.style.display = 'inline'
  icon.style.margin = '8px'


  })
  getStrted.addEventListener('mouseleave', (e)=>{
  icon.style.display = 'none'
  icon.style.margin = 0
  })
  
  btnBottom.addEventListener('mouseenter', ()=>{
    iconBottom.style.display = 'inline'
    iconBottom.style.margin = "7px"
  })
  btnBottom.addEventListener('mouseleave', ()=>{
    iconBottom.style.display = "none"
  icon.style.margin = 0

   
  })


  
  
 
    



  
  



 