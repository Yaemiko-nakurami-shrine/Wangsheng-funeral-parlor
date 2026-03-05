const coupons = [
    "🧧 COMPRE UM, GANHE DOIS!",
    "🌸 DESCONTO DE 77% - Exclusivo para Qiqi",
    "💀 CUPOM EXPIRADO...",
    "🍡 VALE-LANCHE grátis",
    "⚰️ VIP: Almofada extra"
];

// Lógica de Cupons
document.getElementById('get-coupon').addEventListener('click', () => {
    const random = coupons[Math.floor(Math.random() * coupons.length)];
    document.getElementById('coupon-text').innerText = random;
});

// Envio do formulário (o Formspree trata o redirecionamento)
document.getElementById('wangsheng-form').addEventListener('submit', function() {
    alert('Pedido enviado para a Funerária! A Diretora já está a preparar a pá... ⚰️');
});