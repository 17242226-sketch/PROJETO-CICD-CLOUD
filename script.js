let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('cart-items');
    const spanTotal = document.getElementById('cart-total');
    
    lista.innerHTML = '';
    
    if (carrinho.length === 0) {
        lista.innerHTML = '<li id="empty-cart">Seu carrinho está vazio.</li>';
    } else {
        carrinho.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            lista.appendChild(li);
        });
    }
    
    spanTotal.textContent = total.toFixed(2);
}