// While - utilizamos quando não sabemos quando o laço irá terminar... Pode terminar depois de 5 vezes como pode terminar depois de 300...  

//let i = 0;
//while (i <= 10) {
//   i++; // em casos assim, NÃO ESQUECER do i++, pois senão virará um loop infinito
// }

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) { //laço é executado enquanto a condição for verdadeira, quando for falso, sai do laço e para
  rand = random(min, max);
}

// Do while - executa o código primeiro e depois checa a condição

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);

//neste caso, mesmo o let rand = 10, o laço é executado normalmente, isso porque primeiro o código é executado (ou seja, na parte do 'do', o valor de rand é atualizado para um número aleatório) e depois a condição é verificada

//OBS: no while quando a condição é falsa já de cara, o laço simplesmente não é executado | no do while o código é executado pelo menos 1x para depois checar a condição