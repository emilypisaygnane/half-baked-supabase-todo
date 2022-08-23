export function renderTodo(todo, handleComplete) {
    const todoDiv = document.createElement('div');
    const p = document.createElement('p');

    todoDiv.classList.add(todo.complete ? 'complete' : 'incomplete');

    todoDiv.classList.add('todo');

    p.textContent = todo.todo;

    todoDiv.append(p);

    todoDiv.addEventListener('click', () => {
        handleComplete(todo);
    });
    return todoDiv;
}
