// Aside menu

document.querySelector(".aside-section-button").onclick = () => {
    document.querySelector(".aside-section").classList.add('active');
}

document.querySelector(".aside-close").onclick = () => {
    document.querySelector(".aside-section").classList.remove('active');
}

// Maousehover

const work = (e) => {
    e.addEventListener("mouseleave", function (event) {
        isMouseHover = false
        document.querySelector(".aside-content-image").classList.remove('show');
        console.log(isMouseHover)
    });
    e.addEventListener("mouseover", function (event) {
        isMouseHover = true
        document.querySelector(".aside-content-image").classList.add('show');
        console.log(isMouseHover)
    });
}

const contact = (e) => {
    console.log(e)
    e.addEventListener("mouseleave", function (event) {
        isMouseHover = false
        document.querySelector(".aside-content-content").classList.remove('show');
        console.log(isMouseHover)
    });
    e.addEventListener("mouseover", function (event) {
      isMouseHover = true
      document.querySelector(".aside-content-content").classList.add('show');
      console.log(isMouseHover)
    });
}

// document.querySelector(".w_hover").mouseover = () => {
//     // document.querySelector(".aside-menu").classList.add('active');
//     console.log("Salam")
// }

// function w_hover(e) {
//     // document.querySelector(".aside-content").classList.add('show');
//     if(e) {
//         document.querySelector(".aside-content").classList.add('show');
//     }
// }
