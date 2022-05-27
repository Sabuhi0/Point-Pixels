// Aside menu

document.querySelector(".aside-section-button").onclick = () => {
    document.querySelector(".aside-section").classList.add('active');
}

document.querySelector(".aside-close").onclick = () => {
    document.querySelector(".aside-section").classList.remove('active');
}


// Maousehover

const work = (e) => {
    e.addEventListener("mouseover", () => {
        isMouseHover = true
        document.querySelector(".aside-content-image").classList.add('show');
    });
    e.addEventListener("mouseleave", () => {
        isMouseHover = false
        document.querySelector(".aside-content-image").classList.remove('show');
    });
}

const contact = (e) => {
    e.addEventListener("mouseover", () => {
      isMouseHover = true
      document.querySelector(".aside-content-content").classList.add('show');
    });
    e.addEventListener("mouseleave", () => {
        isMouseHover = false
        document.querySelector(".aside-content-content").classList.remove('show');
    });
}
