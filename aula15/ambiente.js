let num = [5, 8, 2, 9, 3]
console.log(`Nosso veto é o ${num}\n`);


num[3] = 6      // Altomaticamente o Js acrecenta uma nova parte no vetor e coloca o numero 6.
num.push(7)     // Acrescenta um dado no vetor
// num.length      // Mostra o comprimento/tamanho do vetor.
num.sort()      // Ordena o vetor.

console.log(`O vetor tem ${num.length} posições`);


// Busca sozinho no vetor onde está o valor 7.
let pos = num.indexOf(8)

if (pos == -1) {
    console.log('O valor não foi encontrado!');
} else {
    console.log(`O valor 8 está na posição ${pos}`);
}
