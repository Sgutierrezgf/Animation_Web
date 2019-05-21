const $hideButton = document.getElementById('hide-modal');
const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');


$hideButton.addEventListener('click', (event) => {
    $modal.style.animation = 'modalOut .8 forwards';
    $overlay.classList.remove('active');
});

