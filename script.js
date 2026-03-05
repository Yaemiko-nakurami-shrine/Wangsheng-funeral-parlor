const coupons = [
    "COMPRE 1, LEVE 2! (Para você e um amigo)",
    "DESCONTO DE 77% - Válido apenas para fantasmas",
    "CUPOM EXPIROU... igual ao cliente! Hehe~",
    "VALE-LANCHE: Um lanche grátis no Quiosque da Wanmin",
    "CLIENTE VIP: Caixão com estofado de seda de Liyue"
];

document.getElementById('wangsheng-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Aiya! Pedido recebido. A Diretora Hu Tao entrará em contato em breve... ou te visitará à noite! 👻');
});

document.getElementById('get-coupon').addEventListener('click', () => {
    const random = coupons[Math.floor(Math.random() * coupons.length)];
    document.getElementById('coupon-text').innerText = random;
});