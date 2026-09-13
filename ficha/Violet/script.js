const entrada = document.getElementById("entrada");
const entrar = document.getElementById("entrar");

const musica = document.getElementById("musica");
const controleMusica = document.getElementById("controle-musica");

const topo = document.getElementById("topo");


// ENTRAR NO SITE

entrar.addEventListener("click", () => {

    entrada.classList.add("saindo");

    musica.volume = 0.25;

    musica.play()
        .then(() => {

            controleMusica.textContent = "Pause Song ❚❚";

        })
        .catch(() => {

            console.log("A música não pôde ser iniciada.");

        });

});


// CONTROLAR MÚSICA

controleMusica.addEventListener("click", () => {

    if (musica.paused) {

        musica.play();

        controleMusica.textContent = "Pause Song ❚❚";

    } else {

        musica.pause();

        controleMusica.textContent = "Play song ▶";

    }

});


// VOLTAR AO TOPO

topo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ANIMAÇÃO DA VIDA

const progresso = document.querySelector(".progresso");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            progresso.classList.add("animar");

        }

    });

}, {
    threshold: 0.5
});


observador.observe(progresso);