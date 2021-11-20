export type Recipe = {
    id: number,
    title: string,
    cookTime: number,
    prepTime: number,
    ingredients: string,
    steps: string,
    category: string,
    image: string,
}

export type RecipeCardContent = {
    id: number,
    title: string,
    cookTime: number,
    prepTime: number,
    category: string,
    image: string,
    link:string,
}