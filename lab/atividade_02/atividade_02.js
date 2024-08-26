// Atividade 02 - Diogo Lima Carvalho
// regra de três

/*
Regra:

n1   n2
__ = __
n3   X
*/
function regraTres(n1, n2, n3) {
    return parseFloat((n2 * n3) / n1).toFixed(2);
}

console.log("Calculos regra de três: ")
console.log(regraTres(3, 5, 7));
console.log(regraTres(10, 18, 15));
console.log(regraTres(3, 5, 6));

// maior valor entre cinco números

function maior_numero(n1, n2, n3, n4, n5) {
    let maior_numero_final = n1;

    if (n2 >= maior_numero_final) maior_numero_final = n2;
    if (n3 >= maior_numero_final) maior_numero_final = n3;
    if (n4 >= maior_numero_final) maior_numero_final = n4;
    if (n5 >= maior_numero_final) maior_numero_final = n5;

    return maior_numero_final
}

console.log("\nMaiores valores entre cinco números: ")
console.log(maior_numero(5, 6, 9, 21, 32))
console.log(maior_numero(77, 1, 77, 0, 0))
console.log(maior_numero(4, 4, 4, 4, 4))
console.log(maior_numero(4, 7, 1, 0, 3))
console.log(maior_numero(13, 11, 99, 5, 3))
console.log(maior_numero(23, 53, 6, 88, 5))


// menor valor entre cinco números

function menor_valor(n1, n2, n3, n4, n5) {
    let menor_valor_final = n1;

    if (n2 <= menor_valor_final) menor_valor_final = n2;
    if (n3 <= menor_valor_final) menor_valor_final = n3;
    if (n4 <= menor_valor_final) menor_valor_final = n4;
    if (n5 <= menor_valor_final) menor_valor_final = n5;

    return menor_valor_final
}

console.log("\nMenores valores entre cinco números: ")
console.log(menor_valor(1, 54, 5, 21, 43));
console.log(menor_valor(5, 0, 1, 5, 3));
console.log(menor_valor(78, 54, 3, 22, 11));
console.log(menor_valor(4, 3, 11, 2, 7));
console.log(menor_valor(7, 6, 5, 4, 3));
console.log(menor_valor(4, 4, 4, 4, 4));


