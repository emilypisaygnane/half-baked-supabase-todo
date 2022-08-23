export function renderTodo(todo, handleComplete) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add(todo.complete ? 'complete' : 'incomplete');

    div.classList.add('todo');

    p.textContent = todo.todo;

    div.append(p);

    handleComplete.addEventListener('click', () => {
        handleComplete();
    });
    return handleComplete();
}
