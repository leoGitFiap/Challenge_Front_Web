function trocar(cor){
    document.body.style.background = cor;
}

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    
    if (localStorage.getItem(email)) {
        alert('Este email já está cadastrado.');
        return;
    }

    if (senha.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }

    const usuario = { email, senha };
    localStorage.setItem(email, JSON.stringify(usuario));
    
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
});
