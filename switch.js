// Switch case - em casos que apenas uma variável está sendo checada, podemos usá-la ao invés do if-else


function getDiaSemanaTexto(numeroDiaDaSemana) {
  let diaSemanaTexto;

  switch(numeroDiaDaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'Terça';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto;
  }
}

const data = new Date('1987-04-26 00:00:00');
const diaDaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaDaSemana);

console.log(diaDaSemana, diaSemanaTexto);



// O código abaixo equivale a mesma coisa:

//const data = new Date('1987-04-26 00:00:00');
//const diaDaSemana = data.getDay();
//const diaSemanaTexto;

//if (diaSemana === 0) {
//  diaSemanaTexto = 'Domingo';
//} else if (diaSemana === 1) {
//  diaSemanaTexto = 'Segunda';
//} else if (diaSemana === 2) {
//   diaSemanaTexto = 'Terça';
//} else if (diaSemana === 3) {
//  diaSemanaTexto = 'Quarta';
//} else if (diaSemana === 4) {
//  diaSemanaTexto = 'Quinta';
//} else if (diaSemana === 5) {
//  diaSemanaTexto = 'Sexta';
//} else if (diaSemana === 6) {
//  diaSemanaTexto = 'Sábado';
//} else {
//  diaSemanaTexto = '';
//}