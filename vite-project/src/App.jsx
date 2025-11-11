import React, { useState } from 'react'
import TaskList from './components/Tasklist'
import TaskInput from './components/TaskInput'

export default function App () {
  const [tasks, setTasks] = useState([
    'clean room',
    'do dishes',
    'laundry',
    'walk dog',
    'do homework'
  ])

  const addTask = taskName => {
    setTasks([...tasks, taskName])
  }

  const removeTasks = index => {
    setTasks(tasks.filter((_, i) => i !== index))
  }
  return (
    <div>
      <h1>TASK LIST:</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} removeTasks={removeTasks} />
    </div>
  )
}
