export type RegisterFormInputs = {
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
}

export type LoginFormInputs = {
    email: string,
    password: string,
}

export type RecipeFormInputs = {
    title: string,
    category: string,
    prepTime: number,
    cookTime: number,
    ingredients: string,
    steps: string,
    image: File,
}