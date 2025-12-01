//maquina de escribir / se ejecuta 1 vez
const machineWriter = (text = '', time = 200, label = '') => {
    let arrayCaracteres = text.split('');
    label.innerHTML = '';
    let i = 0;

    let writer = setInterval(function () {
        if (i === arrayCaracteres.length) {
            clearInterval(writer); // Detener la escritura
        } else {
            label.innerHTML += arrayCaracteres[i];
            i++;
        }
    }, time);
};

machineWriter("¡Hola, soy Jasmin! 👋 ", 90, machine);


//año dinamico footer
document.getElementById("year").textContent = new Date().getFullYear();


//mostar nivel de candy crush al dar click
document.addEventListener("DOMContentLoaded", function() { 
    const span = document.getElementById("candyLevel");
    let originalText = true;

    span.addEventListener("click", function() {
        if (originalText) {
            this.innerText = "[ Ya pasé el nivel 15000!🍭 ]";    
        } else {
            this.innerText = "[ Ver dato random 📌👀 ]";
        }
        originalText = !originalText;
    });
});


//carrusel con frases automatico
const carouselPhrases = document.querySelector(".carousel-phrases");

//obtener valor maximo del scroll
let maxScrollLeft = carouselPhrases.scrollWidth - carouselPhrases.clientWidth;

let intervalo = null;
let step = 1;

//INTERVALO START- STOP PARA CREAR EL MOVIMIENTO 
//(scrollLeft desplaza el contenido hacia la izquierda)
const start = () => {
    intervalo = setInterval(function () {
        carouselPhrases.scrollLeft = carouselPhrases.scrollLeft + step;
        if (carouselPhrases.scrollLeft === maxScrollLeft) {
            step = step * -1;
        } else if (carouselPhrases.scrollLeft === 0) {
            step = step * -1;
        }
    }, 10);
};

const stop = () => {
    clearInterval(intervalo);
};

start(); 


//animaciones al hacer scroll (Intersection observer)
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.fade-up, .fade-scale').forEach(el => {
        observer.observe(el);
    });
});




