import React from 'react';
import {createAnecdote} from '../reducers/anecdoteReducer'
import {setNotification, clearNotification} from '../reducers/notificationReducer'
import {connect} from 'react-redux'

const AnecdoteForm = (props) => {


const addAnecdote = async (event) => {
  event.preventDefault()
  event.persist()

  const content = event.target.anecdote.value
  
  props.createAnecdote(content)

  props.setNotification(`you created '${event.target.anecdote.value}'`,5)
  
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
