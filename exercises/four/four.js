const numero = Number(prompt('Digite um número:')); //o prompt retorna o valor em string, então dessa maneira o número recebido no prompt já é convertido em number, sendo atribuido à variável numero
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raíz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>${numero} arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>${numero} arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>${numero} com duas casas decimais: ${numero.toFixed(2)}</p>`;
