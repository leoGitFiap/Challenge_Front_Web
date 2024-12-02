document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmaSenha = document.getElementById('confirmaSenha').value.trim();

    // Validação do email
    if (!email.includes('@')) {
        alert('O email deve conter o caractere "@"');
        return;
    }

    // Verifica se o email já está cadastrado
    if (localStorage.getItem(email)) {
        alert('Este email já está cadastrado.');
        return;
    }

    // Validação da senha
    const regexMaiuscula = /[A-Z]/;
    const regexNumero = /[0-9]/;
    const regexSimbolo = /[!@#$%^&*(),.?":{}|<>]/;
    
    if (!regexMaiuscula.test(senha)) {
        alert('A senha deve conter pelo menos, 1 letra maiúscula, 1 número e 1 símbolo.');
        return;
    }

    if (!regexNumero.test(senha)) {
        alert('A senha deve conter pelo menos, 1 letra maiúscula, 1 número e 1 símbolo.');
        return;
    }

    if (!regexSimbolo.test(senha)) {
        alert('A senha deve conter pelo menos, 1 letra maiúscula, 1 número e 1 símbolo.');
        return;
    }

    // Valida a confirmação de senha
    if (senha !== confirmaSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    // Cadastro bem-sucedido
    const usuario = { email, senha };
    localStorage.setItem(email, JSON.stringify(usuario));
    
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html'; // Redireciona para a página de login após cadastro
});
