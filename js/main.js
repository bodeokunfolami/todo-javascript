const form = document.querySelector('form');
const formInput = document.querySelector('#id_input');
const todoList = document.querySelector('#todo-list');

let val = "";

let todos = [];


function getTodos() {
    if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'));
        todos.forEach((item) => {
            todoList.innerHTML += `<li>${item}</li>`; // '<li>' + val + '</li>'
        })
    }
}

function onSubmit(event) {
    event.preventDefault();
    todos.push(val);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoList.innerHTML += `<li>${val}</li>`; // '<li>' + val + '</li>'
    formInput.value = "";
}

function onChange(event) {
    val = event.target.value;
}

form.addEventListener('submit', onSubmit);
formInput.addEventListener('keyup', onChange);

document.addEventListener('DOMContentLoaded', getTodos);



