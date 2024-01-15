// const inputAddTask = document.querySelector('#add-task');
// const buttonTask = document.querySelector('.button-add-task');
// const resultNewTask = document.querySelector('#new-task');

// function creatLi() {
//     const li = document.createElement('li');
//     return li;
// }
// function clearInput() {
//     inputAddTask.value = '';
//     inputAddTask.focus();
// }


// function creatTask(text) {
//     const li = creatLi();
//     li.innerText = text;
//     resultNewTask.appendChild(li);
//     creatButtonClear(li);
//     clearInput();
//     saveTasks();
// }


// function creatButtonClear(li) {
//     li.innerText += ' ';
//     const bntClear = document.createElement('button');
//     bntClear.innerText = 'Apagar';
//     bntClear.setAttribute('class', 'deleting')
//     li.appendChild(bntClear);
// }
// buttonTask.addEventListener('click', function () {
//     if (!inputAddTask.value) return;
//     creatTask(inputAddTask.value);
// });

// document.addEventListener('click', function (event) {
//     const element = event.target;
//     if (element.classList.contains('deleting')) {
//         element.parentElement.remove();
//         saveTasks()
//     }
// });

// function saveTasks() {
//     const liTask = resultNewTask.querySelectorAll('li');
//     const liArray = [];

//     for (let task of liTask) {
//         let taskText = task.innerText;
//         taskText = taskText.replace('Apagar', '').trim();
//         liArray.push(taskText);
//     }
//     const taskJson = JSON.stringify(liArray);
//     localStorage.setItem('tasks', taskJson);
// }

// function addTaskSave() {
//     const tasks = localStorage.getItem('tasks');
//     const taskList = JSON.parse(tasks);
//     console.log(taskList);

//     for (let task of taskList) {
//         creatTask(task);
//     }
// }
// addTaskSave();



//  REFAZENDO O CODIGO PARA APRENDIZADO

const inputTask = document.querySelector('#add-task');
const ulTask = document.querySelector('#new-task');
const buttonSendTask = document.querySelector('.button-add-task');



function creatLi () {
    const li = document.createElement('li');
    return li
}

function clearInput () {
    inputTask.value = ''; //LIMPA INPUT
}

function exibTask (text) {
    const li = creatLi();
    li.innerText = text;
    ulTask.appendChild(li);
    buttonClearTask(li);
    clearInput();
    saveTasks();
}


function buttonClearTask (li){
    li.innerText += ' ' //DANDO ESPAÇO ENTRE O LI E O BUTÃO
    const buttonClear = document.createElement('button');
    buttonClear.innerText = 'Apagar' //ESCREVENDO DENTRO DO BUTÃO
    buttonClear.setAttribute('class', 'deleting');
    li.appendChild(buttonClear);
}

buttonSendTask.addEventListener('click', function (){
    if(!inputTask.value) return; // NÃO PERMITE SER ENVIADO VALOR EM BRANCO
    exibTask(inputTask.value);
} );

document.addEventListener('click', function (event){   //CAPTURA QUALQUER EVENTO DE CLICK NO DOCUMENTO
    const element = event.target;
    if(element.classList.contains('deleting')) {        //RECONHECE O CLICK NO BUTÃO
        element.parentElement.remove();                // REMOVE O SEU PARENTE, NO CASO "LI"
        saveTasks() //ADICIONANDO O SALVAMENTO DAS TAREFAS AO CLICAR EM APAGAR PARA SER EXCLUIDO TAMBÉM NO LOCALSTORAGE DO NAVEGADOR
    }
} );

function saveTasks () {
    const allLi = ulTask.querySelectorAll('li'); //CAPTURANDO TODOS OS LI DENTRO DA UL
    const arrayLi = [];
    
    for (let task of allLi){
        let taskAll = task.innerText; // ATRIBUINDO AS TAREFAS ENVIADAS PARA UMA LET
        taskAll = taskAll.replace('Apagar', '').trim(); //SUBISTITUINDO A PALAVRA 'APAGAR' POR NADA ''
        arrayLi.push(taskAll); //JOGANDO TODAS AS TAREFAS DENTRO DO ARRA
        }

        //JSON É UTILIZADO PARA SALVAR DADOS ENTRE SISTEMAS
        
        const jsonTask = JSON.stringify(arrayLi); //COLOCANDO ARRAY DENTRO DE UM JSON E TRANSFORMANDO EM STRING
        localStorage.setItem('tasks', jsonTask); // SALVANDO O ARRAY/STRING DENTRO DO LOCALSTORAGE NO NAVEGADOR
}

function addTaskSave (){
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);
    console.log(taskList);
  
    for( let task of taskList){
        exibTask(task);
}

} addTaskSave ();





























