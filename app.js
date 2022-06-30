$(document).ready(function() {
 
  setTimeout(function(){
      $('body').addClass('loaded');
      $('h1').css('color','#222222');
  }, 3000);

});

const arrows = document.querySelectorAll(".arrow");
const kdramaLists = document.querySelectorAll(".kdrama-list");

arrows.forEach((arrow, i) => {
    const itemNumber = kdramaLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
        kdramaLists[i].style.transform = `translateX(${
            kdramaLists[i].computedStyleMap().get("transform")[0].x.value - 350
        }px)`;
    } else {
        kdramaLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
    }
    });
        
    console.log(Math.floor(window.innerWidth / 280));
});


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.kdrama-list-title,.logo,.navbar-container,.sidebar,.left-menu-icon,.toggle,.menu-list-item"
);

ball.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.toggle("active");
    });
    ball.classList.toggle("active");
  });

