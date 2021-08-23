// For of - específico p/ elementos que possuem índice (strings, array...), NÃO funciona com OBJETOS | como retorno, teremos o valor em si, e não mais o índice (como ocorre no for e for in)

const nomes = ['Lara', 'Julio', 'Helena', 'Pedro'];

for (let nome of nomes) {
  console.log(nome); //me retorna Lara, Julio, Helena e Pedro
}


//RESUMO
/* For: geralmente com iteráveis, como arrays ou strings - retorna índice ou índice e valor
   For in: geralmente com strings, arrays ou objetos - retorna o índice ou chave e também pode retornar o valor
   For of: funciona para iteráveis - arrays ou strings - retorna o valor em si
*/