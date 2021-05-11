 function contar(){
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    var result = window.document.querySelector('div#result');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        result.innerHTML = `Impossivel contar!`;
    }
    else {
        result.innerHTML = 'Contando:<br/>'

        if (Number(passo.value) <= 0) {
            window.alert('[ERRO] Passo invalido! Considerando PASSO 1');
            passo.value = 1;
        }
        if (Number(inicio.value) < Number(fim.value)) {
            // Contragem crescente
            for (var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
                result.innerHTML += ` ${i} \u{1F449}`;
            }
        } else {
            // COntagem regressiva
            for (var i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)) {
                result.innerHTML += ` ${i} \u{1F449}`;
            }
        }
        result.innerHTML += `\u{1F3C1}`;
    }
 }