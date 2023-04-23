const hamburger = document.querySelector(".hamburger-lines");  
const menu_links = document.querySelector(".nav-items");  

hamburger.addEventListener('click', () => {  
    hamburger.classList.toggle("change")  
    menu_links.classList.toggle("nav-items-move")  
});