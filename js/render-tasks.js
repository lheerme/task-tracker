import { deleteTask } from "./delete-task.js";
import { toggleTaskChecked } from "./toggle-task-checked.js";

const taskList = document.querySelector('.task-list');

export function renderTasks(tasks) {
  taskList.innerHTML = ''

  tasks.forEach(task => {
    const li = document.createElement('li')
    const buttonCheckbox = document.createElement('button')
    const text = document.createElement('p')
    const buttonDelete = document.createElement('button')

    li.className = 'task-item'
    buttonDelete.className = 'delete-button'
    buttonDelete.type = 'button'
    buttonDelete.addEventListener('click', () => deleteTask(task.id));
    buttonDelete.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
    `
    buttonCheckbox.className = 'checkbox-button'
    buttonCheckbox.type = 'button'
    buttonCheckbox.setAttribute('role', 'checkbox')
    buttonCheckbox.setAttribute('aria-checked', String(task.isCompleted))
    buttonCheckbox.addEventListener('click', (event) => toggleTaskChecked(event, task.id));
    if (task.isCompleted) {
      buttonCheckbox.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
      `
    }
    text.textContent = task.name

    li.appendChild(buttonCheckbox);
    li.appendChild(text);
    li.appendChild(buttonDelete);
    taskList.appendChild(li)
  })
}