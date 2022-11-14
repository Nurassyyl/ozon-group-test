const openBtn = document.getElementById('menu-button');
const closeBtn = document.getElementById('close-menu');
const menu = document.querySelector(".menu");
const menuItemArrow = document.querySelector('.menu-item-arrow');
const underTheMenu = document.querySelector(".under-the-menu");
const menuArrow = document.querySelectorAll(".menu-arrow");
console.log(underTheMenu);
openBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0%)';
    closeBtn.style.transform = 'translateX(0%)';
    document.body.style.overflow = "hidden";
})

closeBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)';
    closeBtn.style.transform = 'translateX(100%)';
    document.body.style.overflow = "";
})

