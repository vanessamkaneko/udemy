/* Valores primitivos (imutáveis) - string, number, boolean, undefined, null, bigint, symbol */
let a = 'A';
let b = a; // neste caso por ser um dado primitivo, fazemos uma CÓPIA do valor de a para variável b - sendo assim, ambas são independentes, 'a' não depende de 'b' e nem vice-versa, a não ser na primeira vez que é feita a cópia de um para o outro, mas ao longo do código, 'b' irá manter o valor copiado independemente do valor que 'a' tiver
console.log(a, b)

a = 'Outra coisa'; //dessa maneira, apenas o 'a' irá ter seu valor mudado, enquanto 'b' irá continuar valendo 'A'
console.log(a, b)

/* Tipos de dados passados por referência (mutáveis) - array, object, function */

let exampleA = [1, 2, 3];
let exampleB = exampleA; // neste caso, o exampleB está apontando para o MESMO VALOR NA MEMÓRIA que o exampleA, sendo então interligados - a mudança no valor do exampleA irá afetar o exampleB bem como a mudança no exampleB irá afetar o exampleA

exampleA.push(4);
console.log(exampleA, exampleB) //mesmo tendo feito o push no exampleA, irá também aparecer no exampleB, justamente porque aponta para o mesmo valor na memória 

//porém, há uma forma de *copiar*  o valor de valores mutáveis:
let firstExample = [30, 40, 50];
let secondExample = [...firstExample]; //estou fazendo um spread do first no second - neste caso, os valores são independentes em relação ao outro
let otherExample = secondExample; //aqui este valor será alterado caso o secondExample sofrer alteração - são dependenetes 
firstExample.push(60) //só o valor de firstExample é alterado
secondExample.pop(); //tanto o valor de secondExample quanto o do otherExample são alterados, pois apontam para o mesmo valor na memória
console.log(firstExample, secondExample, otherExample)

const person = {
  name: 'Vanessa',
  age: 23
}

const anotherPerson = {...person}
person.name = 'Lívia'
console.log(anotherPerson)

//RESUMINDO: quando é feito um spread, os valores mutáveis tem o mesmo comportamento dos imutáveis - é feito uma cópia da informação, não tendo mais o comportamento de apontar para o mesmo valor na memória, sendo assim, uma alteração feita em uma variável não afeta a outra - no caso acima, a atribuição do nome Lívia só vale para a person, o anotherPerson continua como Vanessa