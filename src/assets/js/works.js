// Aside menu

document.querySelector(".header-content").onclick = () => {
    document.querySelector(".works-aside-section").classList.add('active');
}

document.querySelector("#aside-close").onclick = () => {
    document.querySelector(".works-aside-section").classList.remove('active');
}