let posicionAnterior = 0
function scrollFunction() {
    let posicionActual = document.documentElement.scrollTop
    let headerId = getHeaderId();
    if (posicionActual > 40) {  //screen.width < 800 &&
        if (posicionAnterior < posicionActual) { //baja
            document.getElementById(headerId).style.transition = 'all 0.6s';
            document.getElementById(headerId).style.marginTop = '-200px';
            posicionAnterior = posicionActual

        }
        if(posicionAnterior > posicionActual+60) {   //sube     //no aparece hasta que suba 60px
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