function converteSegundosRelogio() {
    let horas = parseInt(seg / 3600)
    let minutos = parseInt((seg % 3600) / 60)
    seg = seg % 60
    if (horas < 10) {
        horas = "0" + horas
    }
    if (minutos < 10) {
        minutos = "0" + minutos
    }
    if (seg < 10) {
        seg = "0" + seg
    }
    console.log(horas + ":" + minutos + ":" + seg);
}

let elem = document.getElementById("relogio01")
console.log(elem);
let elem2 = document.getElementById("relogio02")
console.log(elem);

converteSegundosRelogio(seg)
console.log("ihulllllll")
converteSegundosRelogio()

function atualizaRelogio() {
    seg++
    let texto = converteSegundosRelogio(seg)
    elem, innerHTML = texto
}

setInterval(atualizaRelogio, 1000)
///    console.log("horas", horas);
///   console.log("minutos", minutos);
///    console.log("segundos", seg);

///    let elem = document.getElementById("relogio01")
///  console.log(elem);
///    elem, innerHTML = "oi"


///    function fazAlgo(valor) {
///        console.log("algo" + valor);
///    }

///    fazAlgo(23)
///    fazAlgo("ihulll")



///let contador = 1
///function faz(valor) {
///    contador++
///    console.log("faz" + contador)
///}



///setInterval(faz, 1000)
