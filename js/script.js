import { addNewTask } from "./add-new-task.js"
import { renderTasks } from "./render-tasks.js"
import { getTaskList } from './get-task-list.js'

const form = document.querySelector('#task-form')

const tasks = getTaskList()

renderTasks(tasks)

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const value = form.task.value.trim()

  if (value === '') return
  
  addNewTask(value)
  form.task.value = ''
})