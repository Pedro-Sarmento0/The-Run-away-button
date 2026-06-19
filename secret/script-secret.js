const btnReturnSecret = document.getElementById('btn-return-seecret');

function doRunaway() {
    btnReturnSecret.style.position = 'absolute';
    const limitX = window.innerWidth - btnReturnSecret.offsetWidth;
    const limitY = window.innerHeight - btnReturnSecret.offsetHeight;
    const randomX = Math.max(10, Math.floor(Math.random() * (limitX - 10)))
}