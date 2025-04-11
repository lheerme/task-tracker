import { getTaskList } from "./get-task-list.js"
import { renderTasks } from "./render-tasks.js"

export function deleteTask(taskId) {
  const tasks = getTaskList()

  const newTasks = tasks.filter(task => task.id !== taskId)
  
  localStorage.setItem('tasks', JSON.stringify(newTasks))
  renderTasks(newTasks)
}