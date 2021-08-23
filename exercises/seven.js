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
console.log(criaData)

