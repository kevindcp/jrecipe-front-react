
import * as yup from "yup"

const validationRegister = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
})

const validationLogin = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
})

export {validationRegister, validationLogin}