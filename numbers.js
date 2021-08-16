let num1 = 10.3453234523;
let num2 = 2.5

console.log(num1.toString() + num2); //neste caso o num1 é transformado em uma string temporariamente - se der um typeof num1, continuará sendo number, mas na soma ocorrerá uma concatenação
//num1 = num1.toString(); aqui sim o num1 é realmente transformado em uma string

console.log(num1.toString(2)); // faz a representação binária do número

console.log(num1.toFixed(4)); // forma de arredondar um número, sendo colocado entre parênteses o número de casas desejadas após a vírgula

console.log(Number.isInteger(num1)); // forma de verificar se o número é inteiro, retornando true ou false

let temp = num1 * 'Oi'
console.log(Number.isNaN(temp)) // verifica se a conta é inválida, sendo true quando a conta não puder ser feita e false quando a conta puder ser feita

// Ao realizar contas com números decimais, podem haver imprecisões 
let num11 = 0.2
let num22 = 0.7
num11 += num22 // lembrando que é num11 = num11 + num22 - aqui por exemplo daria 0.899999999999 - para resolver isso, é só fazer como abaixo, resultado em 0.9 certinho
num11 = Number(num11.toFixed(2));
console.log(num11)