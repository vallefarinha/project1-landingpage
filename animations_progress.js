function Progreso(id) {
    const button = document.getElementById(id);

    const span = button.querySelector('span');

    const until = parseInt(button.dataset.until);
    const sufix = button.dataset.sufix;

    let i = 0;

    const interval = setInterval(() => {
        span.innerHTML = ++i + sufix;

        if (i === until) {
            clearInterval(interval);
        }
    }, 10)

    button.removeAttribute('onclick');
}

