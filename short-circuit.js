/* FALSY values - false (é literalmente o false), 0, strings vazias ('', ``, ""), null / undefined e NaN - todos esses valores podem ser avaliados como falsos pelo JS */

/* Numa avaliação com && (em que todas as condições precisam ser true), caso todas as condições forem true, é retornado o último valor. Numa segunda situação, como 'Luiz' && undefined && 'Maria - neste caso onde os dois valores (os nomes) são true, retornaria o valor falsy, undefined. */

/* Conceito de short-circuit para o operador && - caso alguma condição me retorne false, a execução do código para ali e me retorna false (ou o valor falsy), ou seja, não é necessário continuar a 'leitura' do código após encontrar um false/falsy */

let falaOi = () => {
  return 'Oi';
}

let vaiExecutar = 'Aqui'

console.log(vaiExecutar && falaOi()) // a função será executada neste caso - no caso de um valor falsy por exemplo, ele seria retornado

/* Conceito de short-circuit para o operador || - caso alguma condição me retorne true, a execução do código para ali e me retorna o valor em si que é true, ou seja, não é necessário continuar a 'leitura' do código após encontrar um valor que seja true - mesmo que haja outros valores true depois, ele me retorna apenas o primeiro que achar */

//const corUsuario = null;
//const corPadrao = corUsuario || 'preto' 
//console.log(corPadrao) // será retornado o preto, pois null é um falsy, sendo procurado um valor que seja true

const corUsuario = 'red';
const corPadrao = corUsuario || 'preto'
console.log(corPadrao) // me retorna o red, pois é o primeiro valor true encontrado

// operador || - sempre que todos os valores forem false, o último valor em si é retornado:

const a = 0;
const b = null;
const c = false;
const d = NaN; // o NaN é retornado
