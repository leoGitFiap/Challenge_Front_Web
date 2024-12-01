document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmaSenha = document.getElementById('confirmaSenha').value.trim();

    // Verifica se o email já está cadastrado
    if (localStorage.getItem(email)) {
        alert('Este email já está cadastrado.');
        return;
    }

    // Valida a senha e confirmação de senha
    if (senha.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }

    if (senha !== confirmaSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    const usuario = { email, senha };
    localStorage.setItem(email, JSON.stringify(usuario));
    
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html'; // Redireciona para o login após cadastro
});

