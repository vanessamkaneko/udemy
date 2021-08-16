let umaString = "Um texto";

console.log(umaString.charAt(3)) // o charAt devolve o elemento que está na posição indicada - no caso na posição 3 está a letra t (inicia contando no 0 e o espaço também conta como uma posição

console.log(umaString[1]) // também serve para pegar o elemento da posição indicada - no caso pegaria a letra m

console.log(umaString.indexOf('texto')) // indexOf serve para saber em que posição começa o elemento indicado - no caso 'texto' começa na posição 3 

console.log(umaString.indexOf('o', 3)) // neste caso eu quero que procure o 'o' a partir da posição 3 - sendo devolvido a posição 7

console.log(umaString.lastIndexOf('o ', 3)) // tem a mesma função do indexOf, mas começa a procurar de trás para frente - aqui é me devolvido -1, pois começando pela posição 3 (que é o t), antes dele não há nenhuma letra "o"

/* MÉTODOS QUE ACEITAM EXPRESSÕES REGULARES */

console.log(umaString.match(/[a-z]/)) // é retornado um array que condiz com a condição estabelecida na expressão regular - no caso retornariam todas as letras minúsculas devido ao uso do g, sem a utilização do g seria retornado apenas um elemento (a letra m)

console.log(umaString.search(/x/)) // semelhante com o indexOf, mas aceita expressões regulares - aqui irá procurar pela letra 'x'

console.log(umaString.replace('Um', 'Outro')) // primeiro é a palavra a ser substituída e depois é a palavra que vai substituir

console.log(umaString.replace(/Um/, 'Outro')) // utilizando com uma expressão regular


let umaString = "O rato roeu a roupa do rei de Roma."

console.log(umaString.replace(/r/g, '#')) // aqui todas as letras 'r' são substituídas pela # - caso não houvesse o 'g', somente o 'r' de rato é que seria substituído

console.log(umaString.length) // retorna 35 - são considerados inclusive os espaços

console.log(umaString.slice(7, 11)) // retorna roeu - a primeira posição indica onde começa e a segunda posição é a posição que quero que termine +1 ~ ou seja, a letra 'u' de roeu tem posição 10, sendo assim, coloquei 11

console.log(umaString.slice(-12, -8)) // neste caso irá começar a contar de trás pra frente - a posição -12 indica que a contagem irá iniciar do espaço antes de rei - o -8 indica que do tamanho original (ou seja, 35) irá ser retirada 8 posições (ficando 27, retirando-se 'de Roma.'), sendo retornado rei

console.log(umaString.split('r', 2)) // devolve um array - o primeiro argumento é p/ indicar qual elemento eu vou usar como parâmetro para a separação (no caso foi a letra r), o segundo argumento é p/ indicar quantos resultados quero obter - é devolvido ['O', 'ato'] - observar que o valor inserido como primeiro argumento não é considerado