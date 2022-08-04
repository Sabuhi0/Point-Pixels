// Aside menu

const aside_section_button = document.querySelector(".aside-section-button");
if(aside_section_button) {
    aside_section_button.addEventListener("click", () => {
        document.querySelector(".aside-section").classList.add('active');
    })
}

const aside_close = document.querySelector(".aside-close");
if(aside_close) {
    aside_close.addEventListener("click", () => {
        document.querySelector(".aside-section").classList.remove('active');
    })
}

// document.querySelector(".aside-section-button").onclick = () => {
//     document.querySelector(".aside-section").classList.add('active');
// }

// document.querySelector(".aside-close").onclick = () => {
//     document.querySelector(".aside-section").classList.remove('active');
// }



// Maousehover


// const work = (e) => {
//     const aside_image = document.querySelector(".aside-image");
//     e.addEventListener("mouseover", () => {
//         if(aside_image) {
//             isMouseHover = true
//             aside_image.classList.add('show');
//         }
//     });
//     e.addEventListener("mouseleave", () => {
//         if(aside_image) {
//             isMouseHover = false
//             aside_image.classList.remove('show');
//         }
//     });
// }

// const contact = (e) => {
//     e.addEventListener("mouseover", () => {
//       isMouseHover = true
//       document.querySelector(".aside-content").classList.add('show');
//     });
//     e.addEventListener("mouseleave", () => {
//         isMouseHover = false
//         document.querySelector(".aside-content").classList.remove('show');
//     });
// }

// Works

const header_content = document.querySelector(".header-content");
if(header_content) {
    header_content.addEventListener("click", () => {
        document.querySelector(".works-aside-section").classList.add('active');
    })
}

const works_aside_close = document.querySelector("#aside-close");
if(works_aside_close) {
    works_aside_close.addEventListener("click", () => {
        document.querySelector(".works-aside-section").classList.remove('active');
    })
}