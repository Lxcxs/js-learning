const reviews = [
    {
        nome: 'Tênis Air Jordan 1 Mid SE Masculino',
        img: './tenis.png',
        preco: 1099.99
    },
    {
        nome: 'Tênis Air Jordan 1 Mid SE Masculino',
        img: './tenis.png',
        preco: 1099.99
    },
    {
        nome: 'Tênis Air Jordan 1 Mid SE Masculino',
        img: './tenis.png',
        preco: 1099.99
    },
    {
        nome: 'Tênis Air Jordan 1 Mid SE Masculino',
        img: './tenis.png',
        preco: 1099.99
    },
    {
        nome: 'Tênis Air Jordan 1 Mid SE Masculino',
        img: './tenis.png',
        preco: 1099.99
    },
    {
        nome: 'Tênis Air Jordan 1 Mid SE Masculino',
        img: './tenis.png',
        preco: 1099.99
    },
    {
        nome: 'Tênis Air Jordan 1 Mid SE Masculino',
        img: './tenis.png',
        preco: 1099.99
    },
    {
        nome: 'Tênis Air Jordan 1 Mid SE Masculino',
        img: './tenis.png',
        preco: 1099.99
    },
    {   
        nome: 'Tênis Air Jordan 1 Mid SE Masculino',
        img: './tenis.png',
        preco: 1099.99  
    },
    {
        nome: 'Tênis Air Jordan 1 Mid SE Masculino',
        img: './tenis.png',
        preco: 1099.99
    }
]

function initOpen() {

    for (let i = 0; i < reviews.length; i++) {

            const div = document.createElement('div');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const image = document.createElement('img');

            document.querySelector('.container').appendChild(div).classList.add('box');
            div.appendChild(h2).innerHTML = `R$ ${reviews[i].preco}`;
            div.appendChild(h1).innerHTML = `${reviews[i].nome}`;
            image.src = reviews[i].img;
            div.appendChild(image);

    }



}

initOpen();

const produtos = document.querySelectorAll('.box');

produtos.forEach(prod => {
    const div2 = document.createElement('div');
    const link = document.createElement('a');

    link.innerHTML = 'Adicionar';
    link.href = '#';


    div2.appendChild(link);
    prod.appendChild(div2).classList.add('addToCart');


    prod.addEventListener('mouseover', () => {
        div2.classList.add('active')
    })
    prod.addEventListener('mouseout', () => {
        div2.classList.remove('active')
    })
})
