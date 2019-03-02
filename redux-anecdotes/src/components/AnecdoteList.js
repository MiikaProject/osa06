import React from 'react';
import {voteAnecdote} from '../reducers/anecdoteReducer'
import {setNotification, clearNotification} from '../reducers/notificationReducer'

const AnecdoteList = ({store}) => {
    const anecdotes = store.getState().anecdotes
    const vote = (id,content) => {
        store.dispatch(
          voteAnecdote(id)
        )
        store.dispatch(
            setNotification(`you voted '${content}'`)
          )

            setTimeout(() => {
                store.dispatch(
                    clearNotification()
                  )
            }, 5000);

      }

      const RenderedAnecdotes = () => {
        
        const filteroidut = anecdotes.filter(anekdootti => {
            return(
                anekdootti.content.toLowerCase().includes(store.getState().filter.toLowerCase())
            )
        })
        const renderoitava = filteroidut.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
                </div>
            </div>
        )
          return(
            renderoitava
          )
      }


    return (
        <div>
            <h2>Anecdotes</h2>
            <RenderedAnecdotes/>
        </div>
    )
}

export default AnecdoteList