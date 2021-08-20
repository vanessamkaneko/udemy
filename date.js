//Objeto Date

// no JS: 0 = domingo e 6 = sábado | 0 = janeiro e 11 = dezembro


// o mês em JS inicia no 0 e vai até 11 - 0 é janeiro e 11 é dezembro, etc

//const data = new Date() //assim é recebido a data atual
//const data = new Date(2019, 2, 15, 12, 33, 43, 700); //ano, mês, dia, hora, minutos, segundos, milisegundos
//const data = new Date('2019-04-20 20:10:43'); //formato mais comum
//console.log('Dia', data.getDate());
//console.log('Mês', data.getMonth() + 1); //mês começa do 0, para obter o mês real, colocamos +1
//console.log('Ano', data.getFullYear());
//console.log('Hora', data.getHours());
//console.log('Min', data.getMinutes());
//console.log('Segundos', data.getSeconds());
//console.log('Ms', data.getMilliseconds());
//console.log('Dia da semana', data.getDay()); 

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes()); 
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);