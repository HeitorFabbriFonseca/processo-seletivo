const senhaInput = document.getElementById('senha');
const verSenhaToggle = document.getElementById('verSenha');

verSenhaToggle.addEventListener('click', function() {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        verSenhaToggle.textContent = '🔓';
    } else {
        senhaInput.type = 'password';
        verSenhaToggle.textContent = '🔒';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const popup = document.getElementById('meuPopup');
    const fecharPopupBtn = document.getElementById('fecharPopup');
    const verSenhaPopupButton = document.getElementById('verSenhaPopup');
    const popupSenhaSpan = document.getElementById('popup-senha');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Coletar os dados form
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Criar um objeto com os dados do form
        const formData = {
            nome: nome,
            email: email,
            senha: senha 
        };

        const webhookURL = 'https://hook.us1.make.com/yd8f7wqada197lf2xbj3kvv4mghisilg'; 

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }); 

        document.getElementById('popup-nome').textContent = nome;
        document.getElementById('popup-email').textContent = email;
        document.getElementById('popup-senha').textContent = senha;

        // display Popup
        popup.style.display = "block";
        popupSenhaSpan.style.display = "none";
        verSenhaPopupButton.textContent = '🔒';
        verSenhaPopupButton.style.display = "inline";
    });

    // Fechar o popup no X
    fecharPopupBtn.addEventListener('click', function() {
        popup.style.display = "none";
    });

    // Fechar o popup no overlay
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });

    verSenhaPopupButton.addEventListener('click', function() {
        if (popupSenhaSpan.style.display === "none") {
            popupSenhaSpan.style.display = "inline";
            verSenhaPopupButton.textContent = '🔓';
        } else {
            popupSenhaSpan.style.display = "none";
            verSenhaPopupButton.textContent = '🔒';
        }
    });
});