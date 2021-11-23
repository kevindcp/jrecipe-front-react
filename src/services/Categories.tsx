import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/v1'

export const getCategories = async() => {
    try {
        const response = await axios.get(BASE_URL + '/categories')
        return response.data
    } catch(err) {
        return err.response.data
    }
}