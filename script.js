// 1. Sistema de Mora (Aumenta ao clicar nos cards ou simular vendas)
let currentMora = 0;
function updateMoraDisplay() {
    const el = document.getElementById('mora-amount');
    if (el) el.innerText = currentMora.toLocaleString() + " 🪙";
}

// 2. Lógica de Cupons
const coupons = [
    "🧧 COMPRE UM, GANHE DOIS! (Combo Casal)",
    "🌸 DESCONTO DE 77% - Exclusivo para Qiqi",
    "💀 CUPOM EXPIRADO... Igual ao cliente!",
    "🍡 VALE-LANCHE: Uma Sopa de Bolinhas grátis",
    "⚰️ VIP: Almofada extra no caixão"
];

const couponBtn = document.getElementById('get-coupon');
if (couponBtn) {
    couponBtn.addEventListener('click', () => {
        const display = document.getElementById('coupon-display');
        const random = coupons[Math.floor(Math.random() * coupons.length)];
        display.innerText = random;
        
        // Bônus: Ganha um pouco de Mora por tentar a sorte
        currentMora += 100;
        updateMoraDisplay();
    });
}

// 3. Alerta de Formulário
const form = document.getElementById('wangsheng-form');
if (form) {
    form.addEventListener('submit', () => {
        alert('Aiya! Pedido enviado. A Diretora Hu Tao entrará em contato em breve... ou te visitará à noite! 👻');
    });
}

// 4. Efeito de Fantasminhas ao clicar (Visual)
document.addEventListener('click', (e) => {
    const ghost = document.createElement('div');
    ghost.innerHTML = '👻';
    ghost.style.position = 'absolute';
    ghost.style.left = e.pageX + 'px';
    ghost.style.top = e.pageY + 'px';
    ghost.style.fontSize = '24px';
    ghost.style.pointerEvents = 'none';
    ghost.style.transition = 'all 1s ease-out';
    ghost.style.opacity = '1';
    
    document.body.appendChild(ghost);
    
    setTimeout(() => {
        ghost.style.transform = 'translateY(-50px)';
        ghost.style.opacity = '0';
    }, 10);
    
    setTimeout(() => ghost.remove(), 1000);
});