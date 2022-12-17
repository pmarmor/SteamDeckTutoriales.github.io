"use strict"
function cambiaImagenSlider(boton) {
    let img = getImgPath()
    let imagenes = ['url(img/sp2.png)','url(img/DeckLogoGold.png)','url(img/DeckLogoMagenta.png)'];
    let colores = ["rgba(0, 102, 255, 0.932)","rgba(255, 0, 0, 0.7)","rgba(255, 102, 0, 0.932)"];
    let i = 0;
    imagenes.forEach(elemento => {
        let rutaRelativa=elemento
        rutaRelativa=rutaRelativa.slice(4)
        rutaRelativa=rutaRelativa.slice(0,-1)
        if (img.includes(rutaRelativa)) {
            i = imagenes.indexOf(elemento)
        }
    });
    if (boton.id == "flechaDerecha") {
        if (i >= imagenes.length - 1) {
            i = -1
        }
        document.getElementById("slider").style.backgroundImage = imagenes[i + 1]
        document.getElementById("content").style.backgroundColor = colores[i + 1]
    }
    else {
        if (i <= 0) {
            i = imagenes.length
        }
        document.getElementById("slider").style.backgroundImage = imagenes[i - 1]
        document.getElementById("content").style.backgroundColor = colores[i - 1]
    }
}
 

function getImgPath() {
    let img = document.getElementById('slider');
    let styles = window.getComputedStyle(img);
    img = styles.backgroundImage;
    return img
}