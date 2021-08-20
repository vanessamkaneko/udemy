
function nomeDiaDaSemana (diaDaSemana) {
  let textoDiaDaSemana;
 
  switch(diaDaSemana) {
    case 0:
      textoDiaDaSemana = 'domingo';
      return textoDiaDaSemana;
    case 1:
      textoDiaDaSemana = 'segunda-feira';
      return textoDiaDaSemana;
    case 2:
      textoDiaDaSemana = 'terça-feira';
      return textoDiaDaSemana;
    case 3:
      textoDiaDaSemana = 'quarta-feira';
      return textoDiaDaSemana;
    case 4:
      textoDiaDaSemana = 'quinta-feira';
      return textoDiaDaSemana;
    case 5:
      textoDiaDaSemana = 'sexta-feira';
      return textoDiaDaSemana;
    case 6:
      textoDiaDaSemana = 'sexta-feira';
      return textoDiaDaSemana;
    default:
      textoDiaDaSemana = '';
  }
}

const dataAtual = new Date();
const pegarDia = dataAtual.getDay();
const nomeDiaSemana = nomeDiaDaSemana(pegarDia);