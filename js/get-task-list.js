export function getTaskList() {
  const localStorageTasks = localStorage.getItem('tasks')
  const tasks = localStorageTasks ? JSON.parse(localStorageTasks) : []

  return tasks
}