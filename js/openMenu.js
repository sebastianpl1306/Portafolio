const header = document.getElementsByTagName('header');
const btnMenu = document.getElementById('btnMenu');
const buttonsNavigation = document.getElementById('buttons-navigation');
const socialNetworks = document.getElementById('social-networks');
const windowScreen = window.innerWidth;
let isOpen = false;

const CloseMenu = () =>{
    isOpen = false;
    header[0].style.width = '10%';
    buttonsNavigation.style.display = 'none';
    socialNetworks.style.display = 'none';
}

const OpenMenu = () =>{
    isOpen = true;
    header[0].style.width = '90%';
    buttonsNavigation.style.display = 'inline-block';
    socialNetworks.style.display = 'inline-block';
}

const toggleMenu = () =>{
    isOpen ? CloseMenu() : OpenMenu()
}

if( windowScreen <= 768){
    CloseMenu();
}
btnMenu.addEventListener('click', toggleMenu);

