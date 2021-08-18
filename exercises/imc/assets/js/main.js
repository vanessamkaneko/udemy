// Capturar evento de submit do formulário | Obs: (e) = (evento)
const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function (e) {    
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura')
  
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const mensagem = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(mensagem, true);
});

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaParagrafos () {
  const paragrafo = document.createElement('p');
  return paragrafo;
}

function setResultado (mensagem, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const paragrafo = criaParagrafos();

  if (isValid) {
    paragrafo.classList.add('paragrafo-resultado');
  } else {
    paragrafo.classList.add('bad')
  }

  paragrafo.innerHTML = mensagem;
  resultado.appendChild(paragrafo);
}