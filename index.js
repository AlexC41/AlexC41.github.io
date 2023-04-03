const hamburger = document.querySelector(".hamburger-lines");  
const menu_links = document.querySelector(".menu_links");  

hamburger.addEventListener('click', () => {  
    hamburger.classList.toggle("change")  
    menu_links.classList.toggle("menu_links_move")  
});  