//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className = "";
}

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}
function enviarMail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const coments = document.getElementById('coments').value;

    // Crea el enlace mailto
    const mailtoLink = `mailto:franciscobalonerodev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Nombre: ${name}%0AEmail: ${email}%0AMensaje:%0A${coments}`
    )}`;

    // Abre el cliente de correo
    window.location.href = mailtoLink;
}