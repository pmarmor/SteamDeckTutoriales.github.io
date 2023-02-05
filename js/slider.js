"use strict"
let sliderId = getSliderId()
let slider=document.getElementById(sliderId)
slider.onclick = function(event) {
    if(event.target.id!="flechaDerecha" && event.target.id!="flechaIzquierda"){
        window.location.href=document.getElementById("sliderLink").href ; 
        
    }
  };
let imagenes = ['url(tutoriales/tecladoBluetooth/tecladoBluetooth.webp)','url(img/slider/resumen.png)', 'url(tutoriales/noEnciende/deck2.png)','url(tutoriales/shortcuts/shortcuts.jpg)'];
//imagenes=imagenes.reverse()
let colores = ["rgba(255, 0, 0, 0.8)", "rgba(255, 102, 0, 0.932)","rgba(0, 102, 255, 0.932)","#eeff00" ];
colores=colores.reverse()
let titulos = [ "Cómo conectar un teclado Bluetooth a Steam Deck","Así puedes ver tu resumen del año en Steam", "¿Qué hacer si tu Steam Deck no enciende?","Todos los atajos de Steam Deck"];
//titulos=titulos.reverse()
let enlaces = [ "tutoriales/tecladoBluetooth/tecladoBluetooth.html",'noticias/steamReplay/steamReplay.html',"tutoriales/noEnciende/noEnciende.html","tutoriales/shortcuts/shortcuts.html"];
//enlaces=enlaces.reverse()

document.getElementById(sliderId).style.backgroundImage = imagenes[0]
document.getElementById("content").innerHTML=titulos[0]
document.getElementById("sliderLink").href=enlaces[0]
let crono = setInterval(cronometro, 3000)//Cronometro del slider. Necesario para que se ejecute por primera vez, ya que luego se reinicia en
//la función cambiaImagenSlider

function cambiaImagenSlider(boton) {
    clearInterval(crono)//Necesario para eliminar el cronometro de 8 segundos al pulsar una flecha. 
    crono = setInterval(cronometro, 3000)//Volvemos con el valor inicial del cronometro después de borrar el crono de 8 segundos
    sliderId = getSliderId()
    let img = getImgPath()
    let i = 0;
    imagenes.forEach(elemento => {
        let rutaRelativa = elemento
        rutaRelativa = rutaRelativa.slice(4)
        rutaRelativa = rutaRelativa.slice(0, -1)
        if (img.includes(rutaRelativa)) {
            i = imagenes.indexOf(elemento)
        }
    });
    if (boton.id == "flechaDerecha" || boton == "crono") {
        if (i >= imagenes.length - 1) {
            i = -1
        }
        document.getElementById(sliderId).style.backgroundImage = imagenes[i + 1]
        document.getElementById("sliderLink").style.backgroundColor = colores[i + 1]
        document.getElementById("sliderLink").href = enlaces[i + 1]
        document.getElementById("content").innerHTML = titulos[i + 1]
    }
    else {
        if (i <= 0) {
            i = imagenes.length
        }
        document.getElementById(sliderId).style.backgroundImage = imagenes[i - 1]
        document.getElementById("sliderLink").style.backgroundColor = colores[i - 1]
        document.getElementById("sliderLink").href = enlaces[i - 1]
        document.getElementById("content").innerHTML = titulos[i - 1]
    }
    if (typeof boton.id != "undefined") {
        clearInterval(crono)
        crono = setInterval(cronometro, 8000)
    }
}

function getImgPath() {
    let sliderId = getSliderId()
    let img = document.getElementById(sliderId);
    let styles = window.getComputedStyle(img);
    img = styles.backgroundImage;
    return img
}
function getSliderId() {
    let sliderId = ""
    if (document.getElementById('slider') != "undefined" && document.getElementById('slider')) {
        sliderId = "slider"
    }
    if (document.getElementById('sliderTutoriales') != "undefined" && document.getElementById('sliderTutoriales')) {
        sliderId = "sliderTutoriales"
    }
    if (document.getElementById('sliderNoticias') != "undefined" && document.getElementById('sliderNoticias')) {
        sliderId = "sliderNoticias"
    }
    return sliderId
}

/**
 * Obtiene nombre de la página
 * @returns nombre de la página
 */
function getDocumentName() {
    let path = window.location.pathname;
    let pagina
    if(path=='/SteamDeckTutoriales.github.io/)'){
        pagina='/SteamDeckTutoriales.github.io/'
    }
    else{
        pagina=path.split("/").pop()
    }
    return pagina
}
function cronometro() {
    let boton = "crono";
    cambiaImagenSlider(boton);


} 