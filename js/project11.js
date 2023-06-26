
// VARIABLES *****************

const box1 = document.querySelector('#box1 .boxNumber');
const box2 = document.querySelector('#box2 .boxNumber');
const box3 = document.querySelector('#box3 .boxNumber');
const box4 = document.querySelector('#box4 .boxNumber');
const dateConcert = document.querySelector('.date');
const semana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const dateOfTheConcert = new Date('Dec 16, 23 20:30:00')
const dateConcertInMilisecs = dateOfTheConcert.getTime();

// EJECUTION *****************

setInterval(() => {
        manageDate();
}, 1000);


// FUNCIONES *****************

// F1 --------------------------

function manageDate() {
    const dateToCompare = new Date();
    const dateToCompareInMilisecs = dateToCompare.getTime();
    const tiempoRestante = dateConcertInMilisecs-dateToCompareInMilisecs;

    // sacando el equivalente de secs,mins,hours,days,months,years
    const aMinut = 60 * 1000;
    const anHour = 60 * aMinut;
    const aDay = 24 * anHour;

    if (dateConcertInMilisecs < dateToCompareInMilisecs) {
        console.log("Paila, ya paso el concert !");
    } else {
        let diasRestantes = Math.floor(tiempoRestante/aDay);
        let horasRestantes = Math.floor((tiempoRestante % aDay)/anHour);
        let minsRestantes = Math.floor((tiempoRestante % anHour)/aMinut);
        let secsRestantes = Math.floor((tiempoRestante % aMinut)/1000);

        paintTime(diasRestantes,horasRestantes,minsRestantes,secsRestantes);
    }
}

// F2 --------------------------

function paintTime(diasRestantes,horasRestantes,minsRestantes,secsRestantes) {
    const year = dateOfTheConcert.getFullYear();
    const mes = dateOfTheConcert.getMonth();
    const diaMes = dateOfTheConcert.getDate();
    const diaSemana = dateOfTheConcert.getDay();
    const hora = dateOfTheConcert.getHours();
    const min = dateOfTheConcert.getMinutes();
    const sec = dateOfTheConcert.getSeconds();

    // dateConcert.innerHTML = `
    // Día ${semana[dia]} ${dia} de ${meses[mes]} a las ${hora} horas ${min} minutos ${sec} segundos
    // `;

    dateConcert.innerHTML = `
    Día ${semana[diaSemana]} ${diaMes} de ${meses[mes]} del ${year}
    <p>Hora : ${hora} : ${min} </p>
    `;

    box1.textContent = diasRestantes;
    box2.textContent = horasRestantes;
    box3.textContent = minsRestantes;
    box4.textContent = secsRestantes;
}


