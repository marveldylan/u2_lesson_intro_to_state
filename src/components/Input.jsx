import React from 'react'

const Input = (props) => {
  
  return (
    <div>
      <label>Input Task: </label>
      <input type="text" name="task" onChange = { props.handleChange } />
      <button onClick={ props.addTask }>Add</button>
    </div>
  )
}

export default Input
