const inputAddTask = document.querySelector('#add-task');
const buttonTask = document.querySelector('.button-add-task');
const resultNewTask = document.querySelector('#new-task ul');

function creatLi() {
    const li = document.createElement('li');
    return li;
}
function clearInput() {
    inputAddTask.value = '';
    inputAddTask.focus();
}

function creatButtonClear (li){
    li.innerText += ' ';
    const bntClear = document.createElement('button');
    bntClear.innerText = 'Apagar';
    bntClear.setAttribute('class','deleting')
    li.appendChild(bntClear);
}

function creatTask(text) {
    const li = creatLi();
    li.innerText = text;
    resultNewTask.appendChild(li);
    creatButtonClear(li);
    clearInput();
}

buttonTask.addEventListener('click', function () {
    if (!inputAddTask.value) return;
    creatTask(inputAddTask.value);
});

document.addEventListener('click', function(event){
    const element = event.target;
    if(element.classList.contains('deleting')){
    element.parentElement.remove();
    }
})




