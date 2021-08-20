//PRIMEIRA RESOLUÇÃO

// const h1 = document.querySelector('.container h1');
// const dataAtual = new Date();

// function nomeDiaDaSemana (diaDaSemana) {
//   let textoDiaDaSemana;
 
//   switch(diaDaSemana) {
//     case 0:
//       textoDiaDaSemana = 'domingo';
//       return textoDiaDaSemana;
//     case 1:
//       textoDiaDaSemana = 'segunda-feira';
//       return textoDiaDaSemana;
//     case 2:
//       textoDiaDaSemana = 'terça-feira';
//       return textoDiaDaSemana;
//     case 3:
//       textoDiaDaSemana = 'quarta-feira';
//       return textoDiaDaSemana;
//     case 4:
//       textoDiaDaSemana = 'quinta-feira';
//       return textoDiaDaSemana;
//     case 5:
//       textoDiaDaSemana = 'sexta-feira';
//       return textoDiaDaSemana;
//     case 6:
//       textoDiaDaSemana = 'sexta-feira';
//       return textoDiaDaSemana;
//     default:
//       textoDiaDaSemana = '';
//   }
// }

// function nomeDoMes (numeroDoMes) {
//   let textoNomeMes;
 
//   switch(numeroDoMes) {
//     case 0:
//       textoNomeMes = 'janeiro';
//       return textoNomeMes;
//     case 1:
//       textoNomeMes = 'fevereiro';
//       return textoNomeMes;
//     case 2:
//       textoNomeMes = 'março';
//       return textoNomeMes;
//     case 3:
//       textoNomeMes = 'abril';
//       return textoNomeMes;
//     case 4:
//       textoNomeMes = 'maio';
//       return textoNomeMes;
//     case 5:
//       textoNomeMes = 'junho';
//       return textoNomeMes;
//     case 6:
//       textoNomeMes = 'julho';
//       return textoNomeMes;
//     case 7:
//       textoNomeMes = 'agosto';
//       return textoNomeMes;
//     case 8:
//       textoNomeMes = 'setembro';
//       return textoNomeMes;
//     case 9:
//       textoNomeMes = 'outubro';
//       return textoNomeMes;
//     case 10:
//       textoNomeMes = 'novembro';
//       return textoNomeMes;
//     case 11:
//       textoNomeMes = 'dezembro';
//       return textoNomeMes;
//     default:
//       textoNomeMes = '';
//   }
// }

// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = nomeDiaDaSemana(diaSemana);
//   const nomeMes = nomeDoMes(numeroMes);

//   return (
//     `${nomeDia}, ${dataAtual.getDate()} de ${nomeMes}` + 
//     `de ${dataAtual.getFullYear()}, ` +
//     `${zeroAEsquerda(dataAtual.getHours())}:${zeroAEsquerda(dataAtual.getMinutes())}`
//     );
// }

// h1.innerHTML = criaData(dataAtual);

//SEGUNDA SOLUÇÃO
// const h1 = document.querySelector('.container h1');
// const dataAtual = new Date();

// h1.innerHTML = dataAtual.toLocaleDateString('pt-BR', { dateStyle: 'full'})


//TERCEIRA SOLUÇÃO

const h1 = document.querySelector('.container h1');
const dataAtual = new Date();

function nomeDiaDaSemana (diaDaSemana) {
  const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  return diasSemana[diaDaSemana]
}

function nomeDoMes (numeroDoMes) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  return meses[numeroDoMes];
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = nomeDiaDaSemana(diaSemana);
  const nomeMes = nomeDoMes(numeroMes);

  return (
    `${nomeDia}, ${dataAtual.getDate()} de ${nomeMes}` + 
    `de ${dataAtual.getFullYear()}, ` +
    `${zeroAEsquerda(dataAtual.getHours())}:${zeroAEsquerda(dataAtual.getMinutes())}`
    );
}

h1.innerHTML = criaData(dataAtual);

