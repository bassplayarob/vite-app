import React from 'react'

export default function TaskList ({ tasks, toggleTaskCompletion, removeTasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            <span onClick={() => toggleTaskCompletion(index)}>{task.name}</span>
            <button onClick={() => removeTasks(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
