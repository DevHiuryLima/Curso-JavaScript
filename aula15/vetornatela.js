let valores = [8, 1, 7, 4, 2, 9];


//Mostra vetor completo.
// for (let i = 0; i < valores.length; i++) {
//     console.log(`A posição ${i} tem o valor ${valores[i]}`);  
// }

//Mostra vetor completo utlizando de uma menira mais simplificada.
for (let i in valores) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`);
}