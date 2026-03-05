const coupons= ["COMPRE 1, LEVE 2! (Para você e um amigo)",
    "DESCONTO DE 77% - Válido apenas para fantasmas",
    "CUPOM EXPIROU... igual ao cliente! Hehe~",
    "VALE-LANCHE: Um lanche grátis no Quiosque da Wanmin",
    "CLIENTE VIP: Caixão com estofado de seda de Liyue"
];

document.getElementById('wangsheng-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Aiya! Pedido recebido. A Diretora Hu Tao entrará em contato em breve... ou te visitará à noite! 👻');
});

document.getElementById('wangsheng-form').addEventListener('submit', function() {
    alert('Pedido enviado para o Santuário... digo, para a Funerária! Verifique seu e-mail para confirmar 🌸');
    // Não use e.preventDefault() aqui para o Formspree funcionar!
});
});
// 1. Sistema de Cupons da Hu Tao
const coupons = [
    "🧧 COMPRE UM, GANHE DOIS! (Combo Casal)",
    "🌸 DESCONTO DE 77% - Exclusivo para Qiqi",
    "💀 CUPOM EXPIRADO... Igual ao cliente!",
    "🍡 VALE-LANCHE: Uma Sopa de Bolinhas grátis",
    "⚰️ VIP: Almofada extra no caixão"
];

document.getElementById('wangsheng-form').addEventListener('submit', function() {
    alert('Pedido enviado para o Santuário... digo, para a Funerária! Verifique seu e-mail para confirmar 🌸');
    // Não use e.preventDefault() aqui para o Formspree funcionar!
});
    
    // Efeito de som visual
    createGhost(e.pageX, e.pageY);
    display.innerText = random;
});

// 2. Contador de Mora Acumulada
let currentMora = 0;
function addMora(amount) {
    currentMora += amount;
    document.getElementById('mora-amount').innerText = currentMora.toLocaleString() + " 🪙";
}

// 3. Gerador de Fantasminhas ao clicar
function createGhost(x, y) {
    const ghost = document.createElement('div');
    ghost.className = 'floating-ghost';
    ghost.innerHTML = '👻';
    ghost.style.left = x + 'px';
    ghost.style.top = y + 'px';
    
    document.body.appendChild(ghost);
    
    setTimeout(() => {
        ghost.remove();
    }, 2000);
}

// 4. Envio do Formulário "Macabro"
document.getElementById('wangsheng-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('client-name').value;
    
    alert(`Aiya! O contrato de ${name} foi assinado. A Diretora Hu Tao já está preparando a pá! ⚰️✨`);
    
    // Limpa o formulário e gera fantasmas
    this.reset();
    for(let i=0; i<5; i++) {
        setTimeout(() => createGhost(window.innerWidth/2 + (i*20), window.innerHeight/2), i*200);
    }
});