async function pegaDados() {
    const json_data = await fetch('https://rickandmortyapi.com/api').then((res) => res.json());
    const characters = await fetch(json_data.characters).then((resp) => resp.json());
    console.log(characters)

    const container = document.querySelector('.container');

    for (i in characters.results) { 
        console.log(i)
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h3 = document.createElement('h3');
        const image = document.createElement('img');

        container.appendChild(div);
        div.appendChild(h3);
        div.appendChild(h1);
        div.appendChild(image);
        image.src = characters.results[i].image;
        h3.innerHTML = characters.results[i].status;
        h1.innerHTML = characters.results[i].name;

    }
}

pegaDados()
