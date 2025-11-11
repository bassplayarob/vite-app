import React, { useState } from 'react'

export default function TaskInput ({ addTask }) {
  const [taskName, setTaskName] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if (taskName.trim()) {
      addTask(taskName)
      setTaskName('')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          placeholder='add task'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
