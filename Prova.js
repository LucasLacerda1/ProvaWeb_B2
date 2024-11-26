function getColors() {
    const vetorCores = [];
    for (let i = 1; i <= 148; i++) {
        const colorName = document.querySelector(`#box${i} > span > a`).innerText.toLowerCase();
        vetorCores.push(colorName);
    }
    return vetorCores;
}

function selectColors(quantidade, vetorCores) {
    let vetorSelecionados = [];
    if (quantidade > vetorCores.length) {
        alert("Você não pode pedir uma quantidade de cores maior do que existe no vetor.");
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        let i_aleatorio = Math.floor(Math.random() * vetorCores.length);
        let cor_selecionada = vetorCores.splice(i_aleatorio, 1);
        vetorSelecionados = [...vetorSelecionados, ...cor_selecionada];
    }

    return vetorSelecionados;
}

function chooseRandomColor() {
    const vetorCores = getColors();
    const coresSelecionadas = selectColors(10, vetorCores);

    if (!coresSelecionadas || coresSelecionadas.length === 0) {
        console.error("Nenhuma cor foi selecionada.");
        return;
    }

    console.log("As 10 cores escolhidas aleatoriamente são:");
    console.log(coresSelecionadas.join(", "));

    const indiceAleatorio = Math.floor(Math.random() * coresSelecionadas.length);
    const corAleatoria = coresSelecionadas[indiceAleatorio];
    console.log(`Cor escolhida aleatoriamente entre as 10: ${corAleatoria}`);
}
