import React from 'react';
import {createAnecdote} from '../reducers/anecdoteReducer'
import {setNotification, clearNotification} from '../reducers/notificationReducer'

const AnecdoteForm = ({store}) => {


const addAnecdote = (event) => {
  event.preventDefault()
  
  store.dispatch(
    createAnecdote(event.target.anecdote.value)
  )
  store.dispatch(
    setNotification(`you created '${event.target.anecdote.value}'`)
  )

  setTimeout(() => {
    store.dispatch(
      clearNotification()
    )
  }, 5000);
  event.target.anecdote.value=''
}


  return (
  
  <div>
<h2>create new</h2>
<form onSubmit={addAnecdote}>
  <input name='anecdote'></input>
  <button type="submit">lisää</button>
</form>
  </div>
    
)
}

export default AnecdoteForm
