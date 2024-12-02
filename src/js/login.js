document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const btnLogin = document.getElementById('btnLogin');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    
    // Evento de submit no formulário
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o comportamento padrão de submit

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();

        // Verifica se as credenciais correspondem a um usuário no localStorage
        const usuario = localStorage.getItem(email);
        if (!usuario) {
            shakeForm();
            alert('Email não encontrado. Tente novamente.');
            return;
        }

        const usuarioObj = JSON.parse(usuario);
        
        if (usuarioObj.senha === senha) {
            alert('Login bem-sucedido!');
            window.location.href = 'sobre_projeto.html'; // Redireciona para a página inicial após o login
        } else {
            shakeForm();
            alert('Senha incorreta. Tente novamente.');
        }
    });

    // Função de animação de erro (formulário balança)
    function shakeForm() {
        loginForm.classList.add('shake');
        setTimeout(() => {
            loginForm.classList.remove('shake');
        }, 500); // Duração da animação
    }
});