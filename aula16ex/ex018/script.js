let num = document.querySelector('input#num');
let lista = document.querySelector('select#lista');
let result = document.querySelector('div#result');

let valores = [];

function isNumero(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100)
        return true;
    else
        return false;
}

function inLista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1)
        return true;
    else
        return false;
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        result.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (const i in valores) {
            soma += valores[i];

            if(valores[i] > maior)
                maior = valores[i];
            
            if (valores[i] < menor)
                menor = valores[i]
        }

        media = soma / total;

        result.innerHTML = '';
        result.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        result.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        result.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        result.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        result.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}