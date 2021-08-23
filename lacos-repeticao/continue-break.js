// Continue e Break - pode ser aplicado em qualquer laço de repetição

// For of
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    continue; //no caso irá pular o número 2 e continuar para a próxima iteração
  }
  
  console.log(numero)

  if (numero === 7) {
    console.log('Número 7 encontrado: sair do laço.')
    break; //ao satisfazer a condição, o laço é interrompido, não sendo mais executado
  }
}

// For in
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros) {
  let numero = numeros[i];

  if (numero === 2) {
    continue; 
  }
  
  console.log(numero)

  if (numero === 7) {
    console.log('Número 7 encontrado: sair do laço.')
    break; 
  }
}

// For clássico
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];

  if (numero === 2) {
    continue; 
  }
  
  console.log(numero)

  if (numero === 7) {
    console.log('Número 7 encontrado: sair do laço.')
    break; 
  }
}

//While
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];

  if (numero === 2) {
    i++;
    continue; 
  }
  
  console.log(numero)

  if (numero === 7) {
    console.log('Número 7 encontrado: sair do laço.')
    i++;
    break; 
  }
  
  i++;
}

//Do while
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

do {
  let numero = numeros[i];

  if (numero === 2) {
    i++;
    continue; 
  }
  
  console.log(numero)

  if (numero === 7) {
    console.log('Número 7 encontrado: sair do laço.')
    i++;
    break; 
  }
  
  i++;
} while (i < numeros.length);