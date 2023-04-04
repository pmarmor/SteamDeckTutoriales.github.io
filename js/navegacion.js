let posicionAnterior = 0
window.onscroll = scrollFunction;
function scrollFunction() {
    let posicionActual = document.documentElement.scrollTop
    let headerId
    if (typeof headerId == 'undefined') {
        headerId = getHeaderId();    
}
if(screen.width<2000){
    if (posicionActual > 40) {  //screen.width < 800 &&
        if (posicionAnterior < posicionActual) { //baja
            document.getElementById(headerId).style.transition = 'all 0.6s';
            document.getElementById(headerId).style.marginTop = '-150px';
            posicionAnterior = posicionActual

        }
        if(posicionAnterior > posicionActual+50) {   //sube     //no aparece hasta que suba 50px
            posicionAnterior = posicionActual
            document.getElementById(headerId).style.transition = 'all 0.4s';
            document.getElementById(headerId).style.marginTop = '0px';
        }
    }
    else {   //vuelve al origen si se ha modificado la resolución   
        document.getElementById(headerId).style.marginTop = '0px';
    }
}
}
function getHeaderId() {
    let header = document.getElementsByTagName("header")
    return header[0].id
}
