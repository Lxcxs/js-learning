const reviews = [
    {
        nome: 'Produto',
        img: './tenis.png'
    },
    {
        nome: 'Produto',
        img: './tenis.png'
    },
    {
        nome: 'Produto',
        img: './tenis.png'
    },
    {
        nome: 'Produto',
        img: './tenis.png'
    },
    {
        nome: 'Produto',
        img: './tenis.png'
    },
    {
        nome: 'Produto',
        img: './tenis.png'
    }
]


for (let i = 0; i < reviews.length; i++) {
    setTimeout(() => {

        const div = document.createElement('div');
        let texto = document.createElement('h1');
        let image = document.createElement('img')

        document.querySelector('.container').appendChild(div).classList.add('box');
        div.appendChild(texto).innerHTML = `${reviews[i].nome} ${i+1}`;
        image.src = reviews[i].img;
        div.appendChild(image)

    }, 1000 * i)

}
