const elementos = [
  {tag: 'header', texto: 'Primeiro texto'},
  {tag: 'div', texto: 'Segundo texto'},
  {tag: 'section', texto: 'Terceiro texto'},
  {tag: 'footer', texto: 'Quarto texto'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag)
  tagCriada.innerText = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div);
























