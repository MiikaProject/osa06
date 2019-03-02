const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  

  switch (action.type) {

    case 'VOTE':
      const id = action.data.id
      const anecdotetoVote = state.find(anec => anec.id === id)
      
      const changedAnecdote = {
        ...anecdotetoVote,
        votes: anecdotetoVote.votes + 1
      }

      state = state.map(anec => anec.id !== id ? anec : changedAnecdote)
      arrangeAnecdotes(state)
      return state

      case 'CREATE' :
       const addAnecdote ={
         content : action.data.content,
         id:action.data.id,
         votes:action.data.votes
       }
       state = state.concat(addAnecdote)
      return state
      

    default:
      return state
  }


}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (content) => {

  const lisattava = asObject(content)
  return {
    type: 'CREATE',
    data:{
      content:lisattava.content,
      id:lisattava.id,
      votes:lisattava.votes
    }
  }
  
}

const arrangeAnecdotes = (state) => {
  state = state.sort ((a,b) => {
    return b.votes -a.votes
  })
}

export default anecdoteReducer