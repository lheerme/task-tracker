import { getTaskList } from "./get-task-list.js";

export function toggleTaskChecked(event, taskId) {
  const tasks = getTaskList()

  const newTasks = tasks.map(task => {
    if (task.id === taskId) {
      if (!task.isCompleted) {
        event.currentTarget.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
        `
      } else {
        event.currentTarget.innerHTML = ''
      }

      event.currentTarget.setAttribute('aria-checked', String(!task.isCompleted))

      return {
        ...task,
        isCompleted: !task.isCompleted
      }
    }
    return task
  })

  localStorage.setItem('tasks', JSON.stringify(newTasks))
}