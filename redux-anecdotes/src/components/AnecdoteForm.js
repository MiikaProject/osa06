import React from 'react';
import {createAnecdote} from '../reducers/anecdoteReducer'
import {setNotification, clearNotification} from '../reducers/notificationReducer'
import {connect} from 'react-redux'

const AnecdoteForm = (props) => {


const addAnecdote = (event) => {
  event.preventDefault()
  
  props.createAnecdote(event.target.anecdote.value)
  
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
