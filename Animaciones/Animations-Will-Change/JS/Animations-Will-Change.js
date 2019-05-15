const $cuadrado = document.getElementById('cuadrado');
// $cuadrado.addEventListener('nombre del evento', 'que hago cuando el evento ocurra');
$cuadrado.addEventListener('animationend', (event) => {
    // console.log(event.animationName);
    if (event.animationName === 'rebote'){
        $cuadrado.style.animationName = 'cuadrado escalera';
        $cuadrado.style.animationDuration = '3s';
    }
});