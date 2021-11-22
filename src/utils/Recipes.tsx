import axios from 'axios'
import { RecipeFormRequest } from '../types/forms'

// placeholder
const BASE_URL = 'http://localhost:5000/api/v1'

// This does not work on localhost
export const uploadImage = async(image: object) => {
    const data = new FormData()
    data.append("image", image)
    try {
        const response = await axios.post('https://api.imgur.com/3/image', data, {
            headers: {
                Authorization : "Client-ID a7c2fdc2aedce88"
            },
        })
        return response.data.data.link
    } catch (err) {
        return err.response.data
    }
}

export const publishRecipe = async(recipe: RecipeFormRequest) =>{
    try{
        const response =  await axios.post( BASE_URL + '/recipes', recipe)
        return response.data
    } catch (err) {
        return err.response.data
    }
}