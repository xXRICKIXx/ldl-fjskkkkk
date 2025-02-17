function converteSegundosRelogio() {
    let seg = prompt("digite um número")
    seg = parseInt("digite os segundos")
    let horas = parseInt(seg / 3600)
    let minutos = parseInt((seg % 3600) / 60)
    seg = segundos % 60
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

///    console.log("horas", horas);
///   console.log("minutos", minutos);
///    console.log("segundos", seg);
