// Aside menu

document.querySelector(".header-content").onclick = () => {
    document.querySelector(".works-aside-section").classList.add('active');
}

document.querySelector("#aside-close").onclick = () => {
    document.querySelector(".works-aside-section").classList.remove('active');
}


const works_items = document.querySelectorAll(".works-items");
works_items.forEach(item => {
    if(item){
        item.addEventListener('click', () => {
            document.querySelector(".work-template").classList.add('active');
      });
    }  
})

const works_aside_close = document.querySelector(".works-aside-close");
if(works_aside_close){
    works_aside_close.addEventListener('click', () => {
        document.querySelector(".work-template").classList.remove('active');
  });
}