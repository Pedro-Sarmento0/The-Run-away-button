const btnReturn = document.getElementById('btn-return');

function doRunaway() {
    btnReturn.style.position = 'absolute';
    const limitX = window.innerWidth - btnReturn.offsetWidth;
    const limitY = window.innerHeight - btnReturn.offsetHeight;
    const randomX = Math.max(10, Math.floor(Math.random() * (limitX - 10)));
    const randomY = Math.max(10, Math.floor(Math.random() * (limitY - 10)));
    btnReturn.style.left = randomX + 'px';
    btnReturn.style.top = randomY + 'px';
}

btnReturn.addEventListener('mouseover', doRunaway);

btnReturn.addEventListener('click', () => {
    window.location.href = '../start/index.html';
});