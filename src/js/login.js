document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const btnLogin = document.getElementById('btnLogin');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const btnCadastrar = document.getElementById('btnCadastrar');
    
    // Simulação de um banco de dados simples de usuários cadastrados
    const usuariosCadastrados = [
        { email: 'usuario@hospital.com', senha: 'Senha123!' },
        { email: 'admin@hospital.com', senha: 'Admin2024#' }
    ];
    
    // Validações
    function validarEmail(email) {
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regexEmail.test(email);
    }

    function validarSenha(senha) {
        const regexMaiuscula = /[A-Z]/;
        const regexNumero = /[0-9]/;
        const regexSimbolo = /[!@#$%^&*(),.?":{}|<>]/;
        return regexMaiuscula.test(senha) && regexNumero.test(senha) && regexSimbolo.test(senha);
    }

    // Verificar se as credenciais correspondem a algum usuário cadastrado
    function verificarCredenciais(email, senha) {
        return usuariosCadastrados.some(usuario => usuario.email === email && usuario.senha === senha);
    }

    // Evento de submit no formulário
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o comportamento padrão de submit

        const email = emailInput.value;
        const senha = senhaInput.value;

        // Validações
        if (!validarEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        if (!validarSenha(senha)) {
            alert('A senha deve conter pelo menos 1 letra maiúscula, 1 número e 1 símbolo.');
            return;
        }

        // Verificação de credenciais cadastradas
        if (verificarCredenciais(email, senha)) {
            // Sucesso no login
            alert('Login bem-sucedido!');
            // Aqui você pode redirecionar o usuário para a página inicial ou dashboard, por exemplo
        } else {
            // Erro de login
            shakeForm();
            alert('Email ou senha inválidos. Tente novamente.');
        }
    });

    // Função de animação de erro (formulário balança)
    function shakeForm() {
        loginForm.classList.add('shake');
        setTimeout(() => {
            loginForm.classList.remove('shake');
        }, 500); // Duração da animação
    }

    // Link para a página de cadastro (simulado)
    btnCadastrar.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão de navegação
        alert('Aqui você seria redirecionado para a página de cadastro.');
        window.location.href = 'cadastro.html';
    });
});

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