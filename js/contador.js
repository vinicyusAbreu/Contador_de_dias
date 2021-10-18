let valorData = localStorage.getItem("data");


function obterTempoRestante(dataFinal) {

    const total = (new Date(`${dataFinal} 00:00:00`).getTime()) - (new Date().getTime());

    const segundos = Math.floor((total % (1000 * 60)) / 1000);
    const minutos = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60))
    const horas = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const dias = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        dias,
        horas,
        minutos,
        segundos
    };
}

function inicializarORelogio(dataFinal) {

    function updateClock() {
        let diaSpan = document.querySelector('.dias')
        let horaSpan = document.querySelector('.horas')
        let minutoSpan = document.querySelector('.min')
        let segundoSpan = document.querySelector('.seg')
        const tempo = obterTempoRestante(dataFinal);

        diaSpan.innerHTML = tempo.dias;
        horaSpan.innerHTML = ('0' + tempo.horas).slice(-2);
        minutoSpan.innerHTML = ('0' + tempo.minutos).slice(-2);
        segundoSpan.innerHTML = ('0' + tempo.segundos).slice(-2);

        if (tempo.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}


inicializarORelogio(valorData);