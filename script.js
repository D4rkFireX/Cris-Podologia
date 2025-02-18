// Index é a variável da imagem exibida no momento
let index = 0;

function moveSlide(step) {
    const carousel = document.getElementById("carousel");
    const images = carousel.getElementsByTagName("img");
    index = (index + step + images.length) % images.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

    // ⚡ Função para autoplay
    function startAutoPlay() {
        setInterval(() => {
            moveSlide(1); // Move para a próxima imagem automaticamente
        }, 4000); // Troca a imagem a cada 3 segundos
    }

    // Inicia o autoplay ao carregar a página
    window.onload = startAutoPlay;