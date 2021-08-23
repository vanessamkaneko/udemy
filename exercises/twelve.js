/* Escreva uma função que receba um número e retorne o seguinte:
  - Número é divisível por 3 = Fizz
  - Número é divisível por 5 = Buzz
  - Número é divisivel por 3 e 5 = FizzBuzz
  - Número NÃO é divísivel por 3 e 5 = retorna o próprio número;
  - Checar se o número é realmente um número - se receber uma string, retornar a string, por ex
  - Use a função com números de 0 a 100; (usar um laço)
*/

// const fizzBizz = (number) => {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return 'FizzBuzz';
//   } else if (number % 3 === 0) {
//     return 'Fizz';
//   } else if (number % 5 === 0) {
//     return 'Buzz';
//   } else if (!number % 3 === 0 && !number % 5 === 0) {
//     return number;
//   }
// }

// for (let i = 0; i <= 100; i++) {

// }

// Resolução da aula

function fizzBizz (number) {
  if (typeof number !== 'number') return number;
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  return number;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBizz(i))
}