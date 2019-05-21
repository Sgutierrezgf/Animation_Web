const $like = document.getElementById('like');
$like.addEventListener('click', (event)=> {
    console.log(event);
    // $like.classList.add('is-like');
    $like.classList.toggle('is-like');
});