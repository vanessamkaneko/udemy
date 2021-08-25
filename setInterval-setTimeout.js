function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  })
}

//setInterval = configura um intervalo de tempo para que uma função seja executada

const timer = setInterval(function() {
  console.log(mostraHora());
}, 1000) // de 1 em 1s essa função é executada

setTimeout(function () {
  clearInterval(timer) // após 3s, essa função irá parar o 'timer'
}, 3000)

setTimeout(function () {
  console.log('Olá mundo!')
}, 5000)