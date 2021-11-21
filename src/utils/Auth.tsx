import { LoginFormInputs, RegisterFormInputs } from "../types/forms";
import axios from 'axios' 

// placeholder for now
const BASE_URL = 'http://localhost:5000/api/v1'

export const loginUser = async (user: LoginFormInputs) => {
    const response =  await axios.post( BASE_URL + '/auth/login', user)
    return response.data
}

export const registerUser = async (user: RegisterFormInputs) => {
    const response = await axios.post( BASE_URL + '/auth/register', user)
    return response.data
}