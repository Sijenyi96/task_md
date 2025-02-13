document.addEventListener('DO(MContentLoaded',function(){
    const photoGridItems = document.querySelectorAll('.photo-grid-item');
      photoGridItems.forEach((item) => {
         const description = item.querySelector(".description");
         // Show description on right-click (contextmenu)
        item.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        alert (description.textContent);
        description.style.display = 'block';

        setTimeout(() => {
            description.style.display = "none"
        }, 3000);
        });
        // change the border on mouseover and reset on mouseleave
        item.addEventListener("mouseover", () =>{
            item.style.border ="5px solid tomato";
        });
        item.addEventListener("mouseleave", () =>{
            item.style.border ="none";
        });
        //  remove the color box from the DOM
        item.addEventListener("dblclick", () =>{
            item.remove();
        })
    });
 });
