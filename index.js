document.addEventListener("DOMContentLoaded", function (){
    const dropdownTitle = document.querySelector(".dropdown-title");
    const dropdownContent = document.querySelector(".dropdown-content");
    const openBtn = document.querySelector(".open-btn");
    const closeBtn = document.querySelector(".close-btn");
    const menu = document.querySelector(".menu");
    dropdownTitle.addEventListener("click" ,function (){
        dropdownTitle.classList.toggle("rotate-0");
        dropdownContent.classList.toggle("show");
    });
    openBtn.addEventListener("click" ,function (){
        menu.classList.toggle("menu-active")
    });
    closeBtn.addEventListener("click" ,function (){
        menu.classList.toggle("menu-active")
    });
})