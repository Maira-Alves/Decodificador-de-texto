// Funções de Criptografia e Descriptografia
function encriptarTexto(texto) {
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoCriptografado;
}

function desencriptarTexto(texto) {
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDescriptografado;
}

// Evento de Criptografar
document.querySelector('.btn-encriptar').onclick = function() {
    let inputTexto = document.querySelector('.text-area').value;
    if(inputTexto.trim() === "") {
        alert("Por favor, digite um texto para criptografar.");
        return;
    }
    let textoCriptografado = encriptarTexto(inputTexto);
    
    document.querySelector('.mensagem h3').textContent = "Mensagem Criptografada";
    document.querySelector('.mensagem p').textContent = textoCriptografado;

    document.querySelector('.btn-copiar').style.display = 'block'; // Mostra o botão de copiar
    document.querySelector('.mensagem img').style.display = 'none'; // Esconde o boneco
};

// Evento de Descriptografar
document.querySelector('.btn-desencriptar').onclick = function() {
    let inputTexto = document.querySelector('.text-area').value;
    if(inputTexto.trim() === "") {
        alert("Por favor, digite um texto para descriptografar.");
        return;
    }
    let textoDescriptografado = desencriptarTexto(inputTexto);
    
    document.querySelector('.mensagem h3').textContent = "Mensagem Descriptografada";
    document.querySelector('.mensagem p').textContent = textoDescriptografado;

    document.querySelector('.btn-copiar').style.display = 'block'; // Mostra o botão de copiar
    document.querySelector('.mensagem img').style.display = 'none'; // Esconde o boneco
};

// Evento de Copiar
document.querySelector('.btn-copiar').onclick = function() {
    let mensagem = document.querySelector('.mensagem p').textContent;
    navigator.clipboard.writeText(mensagem).then(function() {
        alert('Texto copiado para a área de transferência');
    });
};

// Evento de Resetar
document.querySelector('.btn-resetar').onclick = function() {
    // Restaura a imagem do boneco
    const bonecoImagem = document.querySelector('.mensagem img');
    bonecoImagem.style.display = "block";
    
    // Restaura a mensagem inicial
    document.querySelector('.mensagem h3').textContent = "Nenhuma mensagem encontrada";
    document.querySelector('.mensagem p').textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
    
    // Esconde o botão de copiar
    document.querySelector('.btn-copiar').style.display = "none";
    
    // Limpa a área de digitação
    document.querySelector('.text-area').value = "";
};

function mostrarResultado(textoCriptografado) {
    document.querySelector('.mensagem h3').textContent = "Mensagem Criptografada";
    document.querySelector('.mensagem p').textContent = textoCriptografado;
    document.querySelector('.btn-copiar').style.display = 'block';
    document.querySelector('.mensagem img').style.display = 'none';
}

function mostrarErro() {
    document.querySelector('.mensagem h3').textContent = "Erro";
    document.querySelector('.mensagem p').textContent = "Por favor, insira apenas letras minúsculas e sem acentos.";
    document.querySelector('.btn-copiar').style.display = 'none';
    document.querySelector('.mensagem img').style.display = 'block';
}

document.querySelector('.btn-encriptar').onclick = function() {
    let inputTexto = document.querySelector('.text-area').value;
    if (validarTexto(inputTexto)) {
        let textoCriptografado = encriptarTexto(inputTexto);
        mostrarResultado(textoCriptografado);
    } else {
        mostrarErro();
    }
};

document.querySelector('.btn-desencriptar').onclick = function() {
    let inputTexto = document.querySelector('.text-area').value;
    if (validarTexto(inputTexto)) {
        let textoDescriptografado = desencriptarTexto(inputTexto);
        mostrarResultado(textoDescriptografado);
    } else {
        mostrarErro();
    }
};


function validarTexto(texto) {
    // Implemente a lógica de validação aqui
    // Por exemplo, verificar se o texto contém apenas letras minúsculas e sem acentos
    return /^[a-z]+$/.test(texto);
}


