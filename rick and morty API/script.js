async function pegaDados() {
    const resultadoConvertido = await fetch('https://rickandmortyapi.com/api').then((res) => res.json());
    const characters = await fetch(resultadoConvertido.characters).then((resp) => resp.json())

    const container = document.querySelector('.container');

    async function teste() {
        for (i in characters.results) { 
            console.log(i)
            const div = document.createElement('div');
            const h1 = document.createElement('h1');
            const h3 = document.createElement('h3');

            container.appendChild(div);
            div.appendChild(h1);
            div.appendChild(h3);
            h1.innerHTML = characters.results[i].name;
            h3.innerHTML = characters.results[i].status;

        }
    }
    teste()


}

pegaDados()
