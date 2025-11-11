import React from 'react'

export default function TaskList ({ tasks, removeTasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <p>{task}</p>
            <button onClick={() => removeTasks(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
