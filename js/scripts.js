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
function toggleTheme() {
    const themeLink = document.getElementById('theme-stylesheet');
    const currentTheme = themeLink.getAttribute('href');
    const newTheme = currentTheme === 'css/style.css' ? 'css/dark.css' : 'css/style.css';
    themeLink.setAttribute('href', newTheme);
    const themeToggler = document.getElementById('theme-toggler');
    const currentClass = themeToggler.classList.contains('fa-moon') ? 'fa-moon' : 'fa-sun';
    const newClass = currentClass === 'fa-moon' ? 'fa-sun' : 'fa-moon';
    themeToggler.classList.remove(currentClass);
    themeToggler.classList.add(newClass);
}