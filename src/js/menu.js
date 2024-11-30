// Função para animar a transição de exibição do conteúdo "Detalhes"
document.getElementById('btnSaibaMais').addEventListener('click', function() {
    const detalhes = document.getElementById('detalhes');
    detalhes.classList.add('visible'); // Tornar a seção "Detalhes" visível com animação
    detalhes.classList.remove('hidden');
});

// Função para fechar o conteúdo "Detalhes"
document.getElementById('btnFechar').addEventListener('click', function() {
    const detalhes = document.getElementById('detalhes');
    detalhes.classList.remove('visible');
    detalhes.classList.add('hidden'); // Recolher a seção "Detalhes" com animação
});

// Efeito de mudança de cor no cabeçalho quando o mouse passa sobre o menu
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        document.querySelector('header').style.backgroundColor = '#0056b3';
    });
    link.addEventListener('mouseout', function() {
        document.querySelector('header').style.backgroundColor = '#007BFF';
    });
});

// Efeito de animação no cabeçalho ao carregar a página
window.addEventListener('load', function() {
    document.querySelector('header h1').style.transform = 'scale(1)';
});