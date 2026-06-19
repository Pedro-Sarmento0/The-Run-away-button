const btnRunaway = document.getElementById('btn-runaway');
const btnSecret = document.getElementById('btn-secret');

function doRunaway() {
    btnRunaway.style.position = 'absolute';
    const limitX = window.innerWidth - btnRunaway.offsetWidth;
    const limitY = window.innerHeight - btnRunaway.offsetHeight;
    const randomX = Math.max(10, Math.floor(Math.random() * (limitX - 10)));
    const randomY = Math.max(10, Math.floor(Math.random() * (limitY - 10)));
    btnRunaway.style.left = randomX + 'px';
    btnRunaway.style.top = randomY + 'px';
}

btnRunaway.addEventListener('mouseover', doRunaway);

btnRunaway.addEventListener('click', () => {
    window.location.href = 'congratulations.html';
});

btnSecret.addEventListener('click', () => {
    window.location.href = 'secret.html';
});