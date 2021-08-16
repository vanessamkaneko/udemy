//FUNÇÃO - BASIC
const raiz = (n) => {         //const raiz = n => n ** 0.5 - forma mais simplificada ainda
  return n ** 0.5
};

console.log(raiz(16))

const soma = (x, y) => {
  return x + y;
}

console.log(soma(3, 5))


//OBJETOS - BASIC
function criaPessoa (nome, sobrenome, idade) {                 
  return { nome, sobrenome, idade }
}

const pessoaUm = criaPessoa('Maria', 'Godoy', '38')
const pessoaDois = criaPessoa('Jorge', 'Pereira', '59')
console.log(pessoaUm, pessoaDois.nome)

/*function criaPessoa (nome, sobrenome, idade) {                 
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  }
}   essa função é exatamente igual a primeira, só que maior e mais repetitiva */

const pessoa1 = {
  nome: 'Vanessa',
  sobrenome: 'Kaneko',
  idade: 23,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementaIdade() {
    this.idade++;
  }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
