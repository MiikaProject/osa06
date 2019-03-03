import axios from 'axios'


const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
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

const newVote = async (id) => {
    const url = `${baseUrl}/${id}`
    const oldObject = await axios.get(url)
    console.log(oldObject);
    
    const newObject = {
        content:oldObject.content,
        id:oldObject.id,
        votes:oldObject.votes+1
    }
    const response = await axios.put(url,newObject)
    return response


}




export default {
    getAll,
    createNew,
    newVote
}