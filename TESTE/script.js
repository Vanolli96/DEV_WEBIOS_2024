document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('add-btn');
  const taskInput = document.getElementById('task-input');
  const todoList = document.getElementById('todo-list');

  // Função para adicionar uma nova tarefa
  addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const newTask = createTaskElement(taskText);
      todoList.appendChild(newTask);
      taskInput.value = ""; // Limpar o campo de entrada
    }
  });

  // Função para criar o elemento de tarefa
  function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'X';

    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        label.style.textDecoration = 'line-through';
        label.style.color = '#888';
      } else {
        label.style.textDecoration = 'none';
        label.style.color = 'black';
      }
    });

    deleteButton.addEventListener('click', function() {
      todoList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);

    return li;
  }

  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addButton.click();
    }
  });
});
