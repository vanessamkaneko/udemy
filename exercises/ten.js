// Criar função que recebe dois número e que retorna o maior deles

//forma mais trabalhosa
function numbers (x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

//mais enxuto
function numbers (x, y)  {
  if (x > y) return x;
  return y;
}

//arrow function - quando é uma condição pequena assim, nem precisa das chaves e nem do return, pois já é implicito o que precisa retornar
const numbers = (x, y) => x > y ? x : y;