/* =====================================
   NAVEGACIÓN ENTRE ESCENAS
===================================== */

function irA(id) {

    const escenas = document.querySelectorAll(".scene");

    escenas.forEach(escena => {
        escena.classList.remove("active");
    });

    const destino = document.getElementById(id);

    if (destino) {
        destino.classList.add("active");
    }

    if (id === "flores") {
        iniciarFlores();
    }
}


/* =====================================
   SOBRE
===================================== */

function abrirSobre() {

    const envelope = document.getElementById("envelope");
    const message = document.getElementById("letterMessage");
    const button = document.getElementById("openLetter");
    const hint = document.getElementById("envelopeHint");

    if (!envelope.classList.contains("open")) {

        envelope.classList.add("open");

        hint.style.opacity = "0";

        button.style.opacity = "0";
        button.style.pointerEvents = "none";

        setTimeout(() => {
            message.classList.add("visible");
        }, 900);
    }
}


/* =====================================
   PARTÍCULAS DORADAS
===================================== */

function crearParticula() {

    const container = document.getElementById("particles");

    const spark = document.createElement("span");

    spark.classList.add("spark");

    spark.style.left = Math.random() * 100 + "%";
    spark.style.top = (55 + Math.random() * 40) + "%";

    const size = Math.random() * 3 + 1;

    spark.style.width = size + "px";
    spark.style.height = size + "px";

    spark.style.animationDuration =
        (Math.random() * 2 + 2) + "s";

    container.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 4000);
}


/* =====================================
   PÉTALOS
===================================== */

function crearPetalo() {

    const container = document.getElementById("petals");

    const petal = document.createElement("span");

    petal.classList.add("falling-petal");

    petal.style.left = Math.random() * 100 + "%";

    const size = Math.random() * 8 + 8;

    petal.style.width = size + "px";
    petal.style.height = size * 1.4 + "px";

    petal.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    petal.style.opacity =
        Math.random() * .6 + .3;

    container.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 11000);
}


/* =====================================
   ACTIVAR EFECTOS DEL RAMO
===================================== */

function iniciarFlores() {

    const petals = document.getElementById("petals");

    petals.innerHTML = "";

    /* Primer grupo */
    for (let i = 0; i < 25; i++) {

        setTimeout(() => {
            crearPetalo();
        }, i * 120);
    }

    /* Caída continua */
    const lluvia = setInterval(() => {

        crearPetalo();

    }, 450);

    setTimeout(() => {
        clearInterval(lluvia);
    }, 15000);
}


/* =====================================
   EFECTO DE PARTÍCULAS CONSTANTE
===================================== */

setInterval(() => {

    crearParticula();

}, 500);


/* =====================================
   VOLVER AL PRINCIPIO
===================================== */

function volverInicio() {

    const envelope = document.getElementById("envelope");
    const message = document.getElementById("letterMessage");
    const button = document.getElementById("openLetter");
    const hint = document.getElementById("envelopeHint");

    envelope.classList.remove("open");

    message.classList.remove("visible");

    button.style.opacity = "1";
    button.style.pointerEvents = "auto";

    hint.style.opacity = "1";

    document.getElementById("petals").innerHTML = "";

    irA("inicio");
}


/* =====================================
   TECLADO
===================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        volverInicio();
    }

});


/* =====================================
   INICIO
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const inicio = document.getElementById("inicio");

    inicio.classList.add("active");

});