import React, { useState } from 'react'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {
  
  const [chores, manageChores] = useState([
    'Work on COA project',
    'Do Taxes',
    'Sign up for health insurance'
  ])

const [chore, changeChore] = useState('')

const addChore = () => {
  let myNewList = [...chores, chore] // this is making a copy of the values in the chores
  manageChores(myNewList) // this will change the state of the chores array
}

const handleChange = (event) => {
  changeChore(event.currentTarget.value)

}

const removeChore = (index) => {
  let choreList = [...chores] // create copy of the array. Once it is how we like it, we will add it to the state
  choreList.splice(index, 1) // removes the chore when button in Tasks.jsx component is clicked.
  manageChores(choreList) // Updates state of choreList array
}

  return (
    <div className="list">
      <Input handleChange={ handleChange } addTask={ addChore }/>
      <Tasks tasks={ chores } removeTask={ removeChore }/>
    </div>
  )
}

export default TodoList