const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('ul');


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('open');
});

window.onscroll = function(){
    menuBtn.classList.remove('open');
    navMenu.classList.remove('open');
};


