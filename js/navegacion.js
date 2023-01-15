let posicionAnterior = 0
function scrollFunction() {
    let posicionActual = document.documentElement.scrollTop
    let headerId = getHeaderId();
    if (screen.width < 600 && posicionActual > 20) {
        if (posicionAnterior < posicionActual) { //baja
            document.getElementById(headerId).style.transition = 'all 0.6s';
            document.getElementById(headerId).style.marginTop = '-200px';
            posicionAnterior = posicionActual

        }
        else {   //sube     
            posicionAnterior = posicionActual
            document.getElementById(headerId).style.transition = 'all 0.4s';
            document.getElementById(headerId).style.marginTop = '0px';
        }
    }
    else {   //vuelve al origen si se ha modificado la resolución   
        document.getElementById(headerId).style.marginTop = '0px';
    }
}
function getHeaderId() {
    let header = document.getElementsByTagName("header")
    return header[0].id
}
window.onscroll = scrollFunction;