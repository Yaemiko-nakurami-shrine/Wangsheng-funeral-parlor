// Sistema de Mora
let currentMora = 0;
function addMora(amount) {
    currentMora += amount;
    document.getElementById('mora-amount').innerText = currentMora.toLocaleString();
}

// Sistema de Cupons
const coupons = ["🧧 DESCONTO 77%", "💀 VIP: Caixão de Seda", "🌸 GRÁTIS: Sopa de Bolinhas"];
document.getElementById('get-coupon').addEventListener('click', () => {
    document.getElementById('coupon-text').innerText = coupons[Math.floor(Math.random() * coupons.length)];
});

// Efeito de Fantasmas no Clique
document.addEventListener('click', (e) => {
    const ghost = document.createElement('div');
    ghost.className = 'floating-ghost';
    ghost.innerText = '👻';
    ghost.style.left = e.pageX + 'px';
    ghost.style.top = e.pageY + 'px';
    document.body.appendChild(ghost);
    setTimeout(() => ghost.remove(), 2000);
});