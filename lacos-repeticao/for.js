// for é separado em 3 condições - primeiro: declaração da variável e valor inicial do laço de repetição | segundo: até quando esse laço irá se repetir | terceiro: incremento ou decremento

// for (let i = 0; i <= 10; i++) {
//   console.log(`Senha ${i}`)
// }

// for (let i = 200; i <= 300; i += 10) {
//   console.log(`Linha ${i}`)
// }

// for (let i = 500; i >= 400; i -= 10) {
//   console.log(`Linha ${i}`)
// }

// for (let i = 0; i <= 10; i++) {
//   const par = i % 2 === 0 ? 'par' : 'impar';
//   console.log(i, par)
// }

const frutas = ['Maçã', 'Pera', 'Uva']

for (let i = 0; i < frutas.length; i++) {
  console.log(`índice ${i}`, frutas[i]); //i - retorna o índice e o frutas[i] - índice e valor
}