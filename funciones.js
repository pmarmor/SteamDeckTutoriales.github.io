"use strict"
function cambiaImagenSlider(boton) {
    let img = getImgRelativePath()
    img = img.trim()
    let imagenes = ['url(img/sp2.png)','url(img/DeckLogoGold.png)','url(img/DeckLogoMagenta.png)'];
    let colores = ["rgba(0, 102, 255, 0.932)","rgba(255, 0, 0, 0.7)","rgba(255, 102, 0, 0.932)"];
    let i = 0;
    imagenes.forEach(elemento => {
        if (elemento === img) {
            console.log("encontrada");
            i = imagenes.indexOf(elemento)
        }
    });
    if (boton.id == "flechaDerecha") {
        console.log(imagenes.length)
        console.log(i)
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


function getImgRelativePath() {
    let img = document.getElementById('slider');
    let styles = window.getComputedStyle(img);
    img = styles.backgroundImage;
    img = img.slice(27)
    img = img.slice(0, -2)
    img = "url(" + img + ")";
    return img
}