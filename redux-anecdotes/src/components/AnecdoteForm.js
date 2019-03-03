import React from 'react';
import {createAnecdote} from '../reducers/anecdoteReducer'
import {setNotification, clearNotification} from '../reducers/notificationReducer'
import {connect} from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {


const addAnecdote = async (event) => {
  event.preventDefault()
  event.persist()

  const content = event.target.anecdote.value
  
  const newAnec = await anecdoteService.createNew(content)
  props.createAnecdote(newAnec)

  props.setNotification(`you created '${event.target.anecdote.value}'`)
  
  setTimeout(() => {
    props.clearNotification()
    
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


const mapDispatchToProps = {
  createAnecdote,
  setNotification,
  clearNotification
}

const ConnectedAnecdoteForm = connect(null,mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
