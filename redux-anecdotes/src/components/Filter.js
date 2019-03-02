import React from 'react'
import { setFilterValue } from '../reducers/filterReducer'
import {connect} from 'react-redux'

const Filter = (props) => {


    const handleChange = (event) => {
        props.dispatch(
            setFilterValue(event.target.value)
          )
    }
    const style = {
        marginBottom: 10
    }



    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        filter: state.filter
    }
}

const ConnectedFilter = connect(mapStateToProps)(Filter)
export default ConnectedFilter