
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

const validationRecipe = yup.object().shape({
    title: yup.string().required(),
    category: yup.string().required(),
    ingrefients: yup.string(),
    steps: yup.string(),
})

export {validationRegister, validationLogin, validationRecipe}