const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');

function changeBackgroundColor(event) {
    const liElement = event;
    let liOldBackground = document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < liOldBackground.length; index +=1) {
        liOldBackground[index].style.backgroundColor = 'white';
    }
    liElement.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function addTarefa() {
    const listElement = document.createElement('li');
    listElement.innerText = input.value;
    listElement.addEventListener('click', changeBackgroundColor);
    list.appendChild(listElement);
    input.value = '';
}

button.addEventListener('click', addTarefa)

