 const arrows = document.querySelectorAll(".arrow");
 const movieLists = document.querySelectorAll(".movie-list");

 arrows.forEach((arrow, i) => {
       const itemNumber = movieLists[i].querySelectorAll("img").length;
       let clickCounter = 0; 
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 300);
      clickCounter++;
        if(itemNumber - (2.9 + clickCounter) + (4 - ratio) > 0) {
           movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
          }px)`;
         } else {
            movieLists[i].style.transform = `translateX(0px)`;
            clickCounter=0;
            
         }
   
      });

      console.log(Math.floor(window.innerWidth / 300));
    });



    // TOGGLE
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon"

);
ball.addEventListener("click", () => {
  items.forEach(item => {
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})