/* If pode ser usado sozinho | Else só pode ser utilizado após um if | Posso ter vários else if na checagem bem como posso não ter nenhum, apenas utilizando if e else | Só posso ter um else na checagem | A execução do bloco de código para ao encontrar uma condição verdadeira, saindo do bloco e executando o que está fora */

/*
Entre 0 - 11: Bom dia
Entre 12 -17: Boa tarde
Entre 18 - 23: Boa noite
 */
const numero = 8;

if(numero <= 10) {
  console.log('O número é menor ou igual a 10.')
}

if (numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
  console.log('O número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
  console.log('O número está entre 9 e 11.');
} else {
  console.log('O número não está entre 9 e 11.')
}

console.log('...Aqui vai o resto do código.')