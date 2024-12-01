// Adicionando imagens para o slideshow
let imagens = [
    "./src/assets/solar4.jpeg",
    "./src/assets/solar3.jpeg",
    "./src/assets/solar.jpeg",
    "./src/assets/solar2.jpeg",
    "./src/assets/solar5.jpeg"
];

let i = 0;
let time = 3000;

function slideShow1() {
    document.getElementById("imagehome1").src = imagens[i];
    i++;
    if (i == imagens.length) i = 0;
    setTimeout(slideShow1, time);
}

slideShow1();

function slideShow2() {
    document.getElementById("imagehome2").src = imagens[i];
    i++;
    if (i == imagens.length) i = 0;
    setTimeout(slideShow2, time);
}

slideShow2();

// Efeito de mudança de cor no cabeçalho quando o mouse passa sobre o menu
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        document.querySelector('header').style.backgroundColor = '#0056b3';
    });
    link.addEventListener('mouseout', function() {
        document.querySelector('header').style.backgroundColor = '#007BFF';
    });
});