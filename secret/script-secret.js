const btnReturnSecret = document.getElementById('btn-return-secret');

function doRunaway() {
    btnReturnSecret.style.position = 'absolute';
    const limitX = window.innerWidth - btnReturnSecret.offsetWidth;
    const limitY = window.innerHeight - btnReturnSecret.offsetHeight;
    const randomX = Math.max(10, Math.floor(Math.random() * (limitX - 10)));
    const randomY = Math.max(10, Math.floor(Math.random() * (limitY - 10)));
    btnReturnSecret.style.left = randomX + 'px';
    btnReturnSecret.style.top = randomY + 'px';
}

btnReturnSecret.addEventListener('mouseover', doRunaway);

btnReturnSecret.addEventListener('click', () => {
    window.location.href = '../start/index.html';
});