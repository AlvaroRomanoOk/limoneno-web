const botonAceptarLegal = document.getElementById('btn-aceptar-legal');
const avisoLegal = document.getElementById('aviso-legal');
const fondoAvisoLegal = document.getElementById('fondo-aviso-legal');

dataLayer = [];

if(!localStorage.getItem('legal-aceptado')){
    avisoLegal.classList.add('activo');
    fondoAvisoLegal.classList.add('activo');
} else {
    dataLayer.push({'event': 'legal-aceptado'});
}

botonAceptarLegal.addEventListener('click', () => {
    avisoLegal.classList.remove('activo');
    fondoAvisoLegal.classList.remove('activo');

    localStorage.setItem('legal-aceptado', true);
});