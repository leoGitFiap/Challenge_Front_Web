// Adicionando imagens para o slideshow
let imagens = [
    "./src/assets/sab1.jpeg",
    "./src/assets/sab2.jpeg",
    "./src/assets/sab3.jpeg",
    "./src/assets/sab4.jpeg",
    "./src/assets/sab5.webp",
    "./src/assets/sab6.webp"
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

// Função para alternar a visibilidade de novas sections
function toggleSection(num) {
    const section = document.getElementById('section-' + num);
    
    // Verifica se a section está visível ou não e alterna a exibição
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block'; // Exibe a nova section
    } else {
        section.style.display = 'none'; // Esconde a section
    }
}

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