// Try, Catch, Throw

/* Try - qualquer código que possa gerar algum erro em potencial é colocado neste bloco, se não der nenhum erro, o bloco try é executado normalmente | no primeiro erro que encontrar, para a execução e vai para o catch
   Catch - é executado quando há erros - não exibir o erro em si, preferencialmente que seja apenas algum aviso/algo mais amigável
   Throw - possibilita gerarmos nossos próprios erros; códigos após o throw não são executados
*/

// function soma(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw new Error('x e y precisam ser números.');
//   }

//   return x + y;
// }

// try {
//   console.log(soma(1,2));
//   console.log(soma('1', 2));
// } catch(error) {
//   console.log('Os dados precisam ser números.')
// }

// Try, Catch, Finally

// o Finally SEMPRE é excutado, independemente de erros ou não

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora(data);
  console.log(hora)
} catch(e) {
  console.log('Formato de data inválido.')
} finally {
  console.log('Tenha um bom dia!')
}
