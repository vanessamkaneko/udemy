// For in -> lê os índices de um array ou chaves de um objeto

const frutas = ['Pera', 'Maçã', 'Uva'];

for (let index in frutas) {
  console.log(frutas[index]) //o nome da variável pode ser qualquer um, ao invés de index, poderia ser A, por ex.
}
//no caso será retornado Pera, Maçã e Uva | se desse um console.log(index), me retornaria os índices (0, 1, 2)

const pessoa = {
  nome: 'Vanessa',
  sobrenome: 'Kaneko',
  idade: 23
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]) 
}

// chave me dá o nome das propriedades (nome, sobrenome e idade), o pessoa[chave] me dá o valor delas: é printado então nome Vanessa, sobrenome Kaneko, idade 23