const alunos = ['Ana', 'Bruna', 'Joaquim']
alunos.push('Bianca')
alunos.push('Igor')

//console.log(alunos.slice(0, -2)) // é retornado Ana, Bruna e Joaquim, pois o -2 faz com que os dois últimos elementos sejam excluídos

//alunos.length - retorna o número de índices do array +1 (lembrando que começa em 0 - no caso vai até o índice 4, sendo 5 elementos)
//alunos.unshift('Pedro'); // insere o elemento no início do array
//alunos.push('Luiza'); // insere o elemento ao fim do array
//alunos.shift(); // remove o primeiro elemento do array
//const removido = alunos.pop(); // remove o último elemento do array, o qual pode ser salvo em uma variável
//delete alunos[1] // maneira de deletar um elemento sem alterar os índices - no lugar do índice um, fica <1 empty item>, ao tentar acessar, retorna undefined
//console.log(removido)


//OBS: no typeof, um array é retornado como array, para saber se estou trabalhando realmente com um array, usa-se: nomeDaVariavel instanceof Array, que irá retornar true ou false