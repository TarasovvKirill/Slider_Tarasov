let images = [{
    url: "slider/admiral.jpg",
  }, {
    url: "slider/thieves.jpg",
  }, {
    url: "slider/patriotic.jpg",
  }
];

function initSlider() {
  if (!images || !images.length) return;
  
  let sliderImages = document.querySelector(".project-img");
  let sliderArrows = document.querySelector(".arrow-nav");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderTitles = document.querySelector(".project-ul");
  let sliderDescroption = document.querySelector(".project-description");
 
  initImages();
  initArrows();
  initDots();
  initTitle();
  initDescription()
  
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider-arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left-arrow")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }

 function initTitle() {
    let list = sliderTitles.querySelectorAll(".project-li");
    list.forEach((item, index) => {
        item.setAttribute('class', `project-li n${index} ${index === 0? "active" : ""}`);
        item.setAttribute('data-index', `${index}`);
      });
      sliderTitles.querySelectorAll(".project-li").forEach(title => {
        title.addEventListener("click", function() {
          moveSlider(this.dataset.index);
        })
      })
  }

  function initDescription() {
    let listDesk = sliderDescroption.querySelectorAll(".prj-description");
    listDesk.forEach((item, index) => {
        item.setAttribute('class', `prj-description n${index} ${index === 0? "active" : ""}`);
        item.setAttribute('data-index', `${index}`);
      });
      console.log(listDesk)
    }



  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    sliderTitles.querySelector(".active").classList.remove("active");
    sliderTitles.querySelector(".n" + num).classList.add("active");

    sliderDescroption.querySelector(".active").classList.remove("active");
    sliderDescroption.querySelector(".n" + num).classList.add("active");
  }

}

document.addEventListener("DOMContentLoaded", initSlider)
