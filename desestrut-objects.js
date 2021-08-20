const pessoa = {
  nome: 'Julia',
  sobrenome: 'Silva',
  idade: 23,
  endereco: {
    rua: 'Brasilia',
    numero: 234
  }
};

//const { nome, sobrenome } = pessoa; //dentro das chaves vai o nome das propriedades
// console.log(nome, sobrenome) //me retorna Julia Silva
// const { nome: novoNome, sobrenome} = pessoa; // aqui eu alterei o nome da propriedade 'nome' para novoNome; caso eu quisesse alterar o valor, seria nome: novoNome = Bibi
// console.log(novoNome, sobrenome) //me retorna Julia Silva

// const { endereco: { rua, numero }, endereco } = pessoa;
// console.log(rua, endereco) //me retorna Brasilia para a rua - veja que podemos extrair valores do objeto separadamente - e retorna o endereço completo para o 'endereco'

// const { endereco: {rua = 234} } = pessoa;
// console.log(rua) //supondo que o valor rua não existisse, aqui eu estou setando um valor padrão para ela

const { nome, ...outrasProps} = pessoa;
console.log(nome, outrasProps) //me retorna Julia em resposta ao nome e o restante das propriedades em resposta ao outrasProps