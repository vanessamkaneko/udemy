const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) { //verifica se a tecla apertada foi o Enter
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
})

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus(); //após criar uma tarefa, o cursor ficará piscando no input
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar'); //setou uma class chamada apagar
  botaoApagar.setAttribute('title', 'Apagar esta tarefa') //setou um title
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
 const el = e.target;

 if (el.classList.contains('apagar')) 
   el.parentElement.remove(); //remove a li (que é pai do botaoApagar e do textoInput)
   salvarTarefas(); //aqui tem por função apagar as tarefas do localstorage se elas forem apagadas da lista
})

function salvarTarefas() { //salvar no navegador
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //trim = removeu o espaço sobrando no fim | essa parte foi para retirar o 'Apagar' do lado do texto ao dar um console.log
    listaDeTarefas.push(tarefaTexto);
  }

  // ctrl shift i -> application
  const tarefasJSON = JSON.stringify(listaDeTarefas); //converte um elemento JS em uma string no formato JSON - possibilitando ser armazenada na localstorage
  localStorage.setItem('tarefas', tarefasJSON); // chave e valor - o nome da chave pode ser qualquer um, desde que faça sentido 
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas'); //obtenho os itens salvos na localstorage pelo nome setado anteriormente
  const listaDeTarefas = JSON.parse(tarefas) //converto novamente um objeto js (no caso, em um array)

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

adicionaTarefasSalvas();

