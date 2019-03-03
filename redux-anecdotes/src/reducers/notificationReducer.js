const alkuviesti = ''


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


export const setNotification = (contentToShow,timeToShow) => {
    return dispatch => {
        dispatch({
            type:'SET',
            content:contentToShow
        })

        setTimeout(() => {
            dispatch({
                type:'CLEAR'
            })
        }, timeToShow*1000);
    }

}

export const clearNotification = () => {
    return(
        {
            type:'CLEAR'
        }
    )
}

export default notificationReducer