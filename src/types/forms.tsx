export type RegisterFormInputs = {
    name: string,
    email: string,
    password: string,
}

export type LoginFormInputs = {
    email: string,
    password: string,
}

export type RecipeFormInputs = {
    title: string,
    category: string,
    ingredients: string,
    steps: string,
}