import axios from 'axios'


const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getId = async (id) => {
    const url = `${baseUrl}/${id}`
    const response = await axios.get(url)
    return response.data 
}

const createNew = async content => {
    const object = {
        content: content,
        votes : 0
    }
    const response = await axios.post(baseUrl,object)
    return response.data
}

const newVote = async (votedAnecdoteObject) => {
    const url = `${baseUrl}/${votedAnecdoteObject.id}`
    const response = await axios.put(url,votedAnecdoteObject)
    return response.data
}




export default {
    getAll,
    createNew,
    newVote,
    getId
}