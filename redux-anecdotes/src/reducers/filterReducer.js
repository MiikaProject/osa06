
const initialFilter =''

const filterReducer = (state=initialFilter, action) => {
    
    
    switch(action.type){
        case 'SETVALUE':
        state = action.content
        return state

        default:
        return state
    }
}


export const setFilterValue = (value) => {
    return({
        type:'SETVALUE',
        content:value
    })
}


export default filterReducer