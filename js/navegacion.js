function scrollFunction() {
    let posicionActual=document.documentElement.scrollTop
    if(typeof posicionAnterior =="undefined"){
        let posicionAnterior=document.documentElement.scrollTop
    }

}

window.onscroll = scrollFunction;