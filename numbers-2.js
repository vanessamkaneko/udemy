//let num1 = 9.56575;
//let num2 = Math.floor(num1); // arredonda o número para baixo
//let num2 = Math.ceil(num1); // arredonda o número para cima
//let num2 = Math.round(num1) // arredonda o número para baixo se as casas decimais forem < 0.49 e arredonda para cima se forem > 0.50
//console.log(num1 ** 0.5) // devolve a raiz quadrada do número
//console.log(num2)

//console.log(Math.max(1,2,4,52,54,345,11,200)); // retorna o maior número da sequência
//console.log(Math.min(1,2,4,52,54,345,11,200)); // retorna o menor número da sequência
console.log(Math.random()); // gera um número decimal entre 0 e 1, sendo o 1 nunca incluído
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // isso iria gerar um número redondo entre 5 e 10

//OBS: No JavaScript, um número dividido por 0 retorna com Infinity e é dado como true, em outras linguagens isso daria erro