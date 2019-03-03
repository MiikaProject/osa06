import anecdoteService from '../services/anecdotes'
/*
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
*/
const anecdoteReducer = (state = [], action) => {
  
  switch (action.type) {
    
    case 'VOTE':
      state = state.map(anec => anec.id !== action.data.id ? anec : action.data)
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

      case 'INIT_ANECDOTES' :
      return action.data
      

    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type:'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.getId(id)
    const newAnecdote = {
      content:votedAnecdote.content,
      id:votedAnecdote.id,
      votes:votedAnecdote.votes+1
    }
    const response = await anecdoteService.newVote(newAnecdote)
    dispatch({
      type:'VOTE',
      data : response
    })
  }

}


export const createAnecdote = (lisattava) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(lisattava)
    dispatch({
      type:'CREATE',
      data:newAnecdote
    })
  }
}

const arrangeAnecdotes = (state) => {
  state = state.sort ((a,b) => {
    return b.votes -a.votes
  })
}

export default anecdoteReducer