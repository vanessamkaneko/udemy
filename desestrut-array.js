//OBS: o operador ... pode ser usados como rest operator (que o caso abaixo, usado para pegar o resto) e como spread operator 

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (Arrays)

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];

// const [primeiroNumero, segundoNumero] = numeros;
// console.log(primeiroNumero, segundoNumero) //é printado 1000 e 2000, ou seja, os valores são atribuídos nas variáveis em ordem

// const [primeiroNumero, segundoNumero, ...restoDosNumeros] = numeros; 
// console.log(primeiroNumero, segundoNumero, restoDosNumeros) //printa 1000 e 2000 e um array com o restante dos números, os quais estão atribuídos a variável restoDosNumeros

// const [primeiroNumero, , terceiroNumero, , quintoNumero] = numeros;
// console.log(primeiroNumero, terceiroNumero, quintoNumero) // dessa forma posso pegar os números alternados, no caso, 1000, 3000 e 5000

const numeros = [ 
  [1, 2, 3], // array índice 0 - n.1: índice 0 | n.2: índice 1 | n.3: índice 2
  [4, 5, 6], // array índice 1 - n.4: índice 0 | n.5: índice 1 | n.6: índice 2
  [7, 8, 9]  // array índice 2 - n.7: índice 0 | n.8: índice 1 | n.9: índice 2
]
console.log(numeros[2][1]) //me retorna o número 8 

const outrosNumeros = [ [10, 20, 30], [40, 50, 60], [70, 80, 90] ];
const [lista1, lista2, lista3] = outrosNumeros //agora cada variável refere-se a um array: lista 1 = [10, 20, 30], lista 2 = [40, 50, 60], lista3 = 70, 80, 90]
console.log(lista2[1]); //me retorna o número 50