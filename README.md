# Escolha Aleatória de Cores

Este projeto consiste em um script JavaScript que seleciona cores de uma página HTML, filtra uma lista de 10 cores aleatórias e, em seguida, escolhe uma cor aleatória entre essas 10, exibindo todas as informações no console do navegador.

---

## Como o código funciona

O código é dividido em três etapas principais:

### 1. Obter todas as cores da página (`getColors`)
- Esta função percorre os elementos da página HTML contendo os nomes das cores.
- Extrai o texto de cada elemento e o converte para letras minúsculas.
- Retorna um vetor contendo os nomes de todas as cores disponíveis na página.

### 2. Selecionar 10 cores aleatórias (`selectColors`)
- Recebe o número de cores desejadas e o vetor com todas as cores.
- Escolhe 10 cores aleatórias usando índices gerados com `Math.random`.
- Remove as cores selecionadas do vetor original para evitar repetições.
- Retorna um vetor contendo as 10 cores escolhidas.

### 3. Escolher e exibir uma cor aleatória entre as 10 selecionadas (`chooseRandomColor`)
- Obtém todas as cores disponíveis na página com `getColors`.
- Seleciona 10 cores aleatórias com `selectColors`.
- Escolhe uma cor aleatória entre as 10 usando `Math.random`.
- Exibe as 10 cores escolhidas e a cor final no console do navegador.

---

## Como usar o código

1. Acesse a página [https://www.w3schools.com/tags/ref_colornames.asp](https://www.w3schools.com/tags/ref_colornames.asp).
2. Abra o console do navegador (geralmente `F12` ou `Ctrl+Shift+I` no navegador).
3. Copie e cole o código completo no console.
4. Pressione Enter para executar.
5. O console exibirá:
   - As 10 cores escolhidas aleatoriamente.
   - A cor final selecionada aleatoriamente entre as 10.

---

## Exemplo de saída no console

```plaintext
As 10 cores escolhidas aleatoriamente são:
red, blue, green, yellow, cyan, magenta, purple, pink, brown, orange
Cor escolhida aleatoriamente entre as 10: purple
