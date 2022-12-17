"use strict"
let crono=setInterval(cronometro,4000)

function cambiaImagenSlider(boton) {
    clearInterval(crono)
    crono=setInterval(cronometro,4000)
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
    if (boton.id == "flechaDerecha" || boton=="crono") {
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
    if(typeof boton.id !="undefined"){
        console.log(boton.id)
        console.log("entra")
        clearInterval(crono)
        crono=setInterval(cronometro,8000)
    }
}

function getImgPath() {
    let img = document.getElementById('slider');
    let styles = window.getComputedStyle(img);
    img = styles.backgroundImage;
    return img
}


 function cronometro() {
    console.log("un segundo pasa")
    let boton="crono";
    cambiaImagenSlider(boton);
  /* if(segundo==-1){
    clearInterval(crono);
    document.getElementById("texto").innerHTML = 'Tu tiempo ha terminado';
   }*/

 } 