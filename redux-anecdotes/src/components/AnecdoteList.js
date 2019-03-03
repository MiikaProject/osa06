import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {  
    const vote = (id, content) => {
        props.voteAnecdote(id)
        props.setNotification(`you voted '${content}'`,5)
        
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            <div>
                {props.anecdotesToShow.map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const anecdotesToShow = ({ anecdotes, filter }) => {
    const filteroidut = anecdotes.filter(anekdootti => {
        return (
            anekdootti.content.toLowerCase().includes(filter.toLowerCase())
        )
    })
    return filteroidut
}

const mapStateToProps = (state) => {
    return {
        anecdotesToShow: anecdotesToShow(state),
        filter: state.filter
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    setNotification,
    clearNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList