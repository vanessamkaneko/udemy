function relogioTimer() {

  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC' //refere-se a 01/01/1970, no caso só considerando a hora: 00:00:00
    })
  }
  
  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;
  
  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
  }
  
  document.addEventListener('click', function(e) {
    const elemento = e.target //captura o elemento que está sendo clicado
  
    if (elemento.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }
  
    if (elemento.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  
    if (elemento.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }
  });
}
relogioTimer();


//Solução INICIAL - Antes da melhoria
// const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');
// let segundos = 0;
// let timer;

// iniciar.addEventListener('click', function(event) {
//   relogio.classList.remove('pausado');
//   clearInterval(timer);
//   iniciaRelogio();
// });

// pausar.addEventListener('click', function(event) {
//   clearInterval(timer);
//   relogio.classList.add('pausado');
// });

// zerar.addEventListener('click', function(event) {
//   clearInterval(timer);
//   relogio.innerHTML = '00:00:00';
//   segundos = 0;
// });