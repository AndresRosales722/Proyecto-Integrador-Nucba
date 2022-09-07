window.addEventListener('load', () => {

    /* function qs(element) {
        return document.querySelector(element);
    } */
 
    let qs = (element) => {
        return document.querySelector(element)
    }

    let $botonMenu = qs('#menu')
    let $navMobile = qs('.navigation-mobile')


    let dropMenu = () => {
       $navMobile.classList.toggle('mostrar')
       
    }

    $botonMenu.addEventListener('click',dropMenu)
   













})