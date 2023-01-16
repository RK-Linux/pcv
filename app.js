function Alerta() {
    var respuesta = confirm ("Se va a redirigir a www.rkcoder.ar")
    if (respuesta)
    window.location="https://www.rkcoder.ar";
}

function actual() {
    var y = new Date();
    document.getElementById("fecha").innerHTML = y.toLocaleDateString();
}