import { getTaskList } from "./get-task-list.js"
import { renderTasks } from "./render-tasks.js"

export function addNewTask(task) {
  const tasks = getTaskList()

  tasks.push({
    name: task,
    isCompleted: false,
    id: crypto.randomUUID()
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))

  renderTasks(tasks)
}