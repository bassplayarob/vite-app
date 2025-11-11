import React, { useState } from 'react'
import TaskList from './components/Tasklist'
import TaskInput from './components/TaskInput'

export default function App () {
  const [tasks, setTasks] = useState([
    { name: 'walk the dog', completed: false },
    { name: 'do the dishes', completed: false },
    { name: 'mow the lawn', completed: false }
  ])

  const addTask = taskName => {
    setTasks([...tasks, { name: taskName, completed: false }])
  }

  const toggleTaskCompletion = index => {
    console.log(index)
    setTasks(
      tasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed }
        }
        return task
      })
    )
  }

  const removeTasks = index => {
    setTasks(tasks.filter((_, i) => i !== index))
  }
  return (
    <div>
      <h1>TASK LIST:</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        removeTasks={removeTasks}
      />
    </div>
  )
}
