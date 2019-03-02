const alkuviesti = 'Alkuviesti'


const notificationReducer = (state = alkuviesti, action) => {


    switch (action.type) {

        case 'SET':
            state = action.content
            return state

        case 'CLEAR':
            state = ''
            return state
        default:
            return state

    }

}


export const setNotification = (content) => {
    return (
        {
            type: 'SET',
            content: content
        }
    )

}

export const clearNotification = () => {
    return(
        {
            type:'CLEAR'
        }
    )
}

export default notificationReducer