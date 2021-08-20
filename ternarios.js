// Operadores Ternários
// (condição) ? 'Valor para verdadeiro : 'Valor para falso';

const pontuacaoUsuario = 500;
const nivelUsuario = (pontuacaoUsuario >= 1000) ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preto'; // essa variável sempre terá um valor (mas que depende do valor da corUsuario) e possui um valor padrão (que é o Preto) - como o usuário tem um valor true (o Pink), ela que é considerada como o valor da corPadrao, caso fosse um valor considerado false (como um null), o Preto seria considerado o valor da corPadrao