function adicionarCarrinho() {
    const produtos = [
        {
            'id': 1,
            'nome': 'All Star',
            'cor': 'preto',
            'quantidade': '2',
            'preco': '135,90'
        },
        {
            'id': 2,
            'nome': 'All Star',
            'cor': 'verde',
            'quantidade': '1',
            'preco': '136,90'
        },
        {
            'id': 3,
            'nome': 'All Star',
            'cor': 'amarelo',
            'quantidade': '1',
            'preco': '137,90'
        },
        {
            'id': 4,
            'nome': 'All Star',
            'cor': 'cinza',
            'quantidade': '1',
            'preco': '138,90'
        },
        {
            'id': 5,
            'nome': 'All Star',
            'cor': 'branco',
            'quantidade': '1',
            'preco': '139,90'
        }
    ];

    document.cookie = "carrinho=" + JSON.stringify(produtos);
    calcularTotal()
}


function calcularTotal() {
    let carrinho = JSON.parse(getCookie("carrinho"));

    valorTotal = 0;
    console.log(carrinho)

    for (i = 0; i < carrinho.length; i++) {
        console.log(carrinho[i].quantidade)
        valorTotal += parseInt(carrinho[i].quantidade) * parseFloat(carrinho[i].preco)
        console.log(valorTotal)
        document.getElementById("nome_item").innerHTML += carrinho[i].nome + " " + carrinho[i].cor + "<br>";
        document.getElementById("quantidade").innerHTML += carrinho[i].quantidade + "<br>";
        document.getElementById("preco").innerHTML += "Rp " + carrinho[i].preco + "<br>";
    }

    document.getElementById("subtotal").innerHTML = "Total: " + valorTotal;
}

function getCookie(nome) {
    const cookies = document.cookie.split(";");
    for (let c of cookies) {
        const [key, value] = c.split("=");
        if (key === nome) return value;
    }

    return null;
}