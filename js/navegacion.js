let elementos=["Inicio","Tutoriales","Noticias"];
let enlaces=["inicio.html","tutoriales.html","noticias.html"];
let sliderId=getNavId()
for (let i = 0; i < elementos.length; i++) {
    
}
function getNavId() {
    let sliderId = ""
    if (document.getElementById('navIndex') != "undefined" && document.getElementById('slider')) {
        sliderId = "slider"
    }
    if (document.getElementById('navTutoriales') != "undefined" && document.getElementById('sliderTutoriales')) {
        sliderId = "sliderTutoriales"
    }
    if (document.getElementById('navNoticias') != "undefined" && document.getElementById('sliderNoticias')) {
        sliderId = "sliderNoticias"
    }
    return sliderId
}
