const nome = prompt('Digite seu nome completo:')

document.body.innerHTML += `Seu nome é: ${nome}<br>`
document.body.innerHTML += `Seu nome tem ${nome.length} letras<br>`
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}<br>`
document.body.innerHTML += `Qual o primeiro índice da letra "n" no seu nome? - índice ${nome.indexOf('n')}<br>`
document.body.innerHTML += `Qual o último índice da letra "s" no seu nome? - índice ${nome.lastIndexOf('s')}<br>`
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br>`
document.body.innerHTML += `As primeiras 3 letras do seu nome são: ${nome.slice(0,3)}<br>`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br>`
document.body.innerHTML += `Seu nome em letras maiúsculas: ${nome.toUpperCase()}<br>`
document.body.innerHTML += `Seu nome em letras minúsculas: ${nome.toLowerCase()}`