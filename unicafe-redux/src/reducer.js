let initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'GOOD':

      const newState = {
        good: state.good+1,
        ok: state.ok,
        bad: state.bad
      }
      state = newState

      return state
    case 'OK':

    const newState2 = {
      good: state.good,
      ok: state.ok+1,
      bad: state.bad
    }

    state = newState2
      return state

    case 'BAD':

    const newState3 = {
      good: state.good,
      ok: state.ok,
      bad: state.bad+1
    }
    state = newState3
    
      return state
    case 'ZERO':

      const newState4 = {
        good: 0,
        ok: 0,
        bad: 0
      }

      state = newState4

      return state
    default: return state
  }

}

export default counterReducer