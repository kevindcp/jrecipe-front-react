import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RecipeContent } from '../types/recipes'
import { RecipesState, UpdateRecipe } from '../types/redux'
import type { RootState } from './store'

const initialState: RecipesState = {
  recipes: [{
    id: 1,
    title: 'Pasta Carbonara',
    cookTime: 10,
    prepTime: 30,
    ingredients: 'ing1/ing2/ing3',
    steps: 'st1/st2/st3dasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss das sssssssssssssssssssssssssssssssssssssssssssssssssssssssss asssssssssssssssssssssssssssss adsdk ashdsjkdhs kjhdsssssssssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdss adsh djksdsdsdsdddddddddddddddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdd daskjhdskhjdsssssssssssssssssssssss dasjkhhhhhhhhhhhhhhhhhhh asdkjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh daskjhhhhhhhhhhhhhhhhhhhhh',
    category: 'Pasta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg'
  }, {
    id: 2,
    title: 'Pasta Carboara',
    cookTime: 10,
    prepTime: 30,
    ingredients: 'ing1/ing2/ing3',
    steps: 'st1/st2/st3dasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss das sssssssssssssssssssssssssssssssssssssssssssssssssssssssss asssssssssssssssssssssssssssss adsdk ashdsjkdhs kjhdsssssssssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdss adsh djksdsdsdsdddddddddddddddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdd daskjhdskhjdsssssssssssssssssssssss dasjkhhhhhhhhhhhhhhhhhhh asdkjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh daskjhhhhhhhhhhhhhhhhhhhhh',
    category: 'Pasta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg'
  }],
}

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RecipeContent>) => {
      const newRecipes = state.recipes.slice()
      newRecipes.push(action.payload)
      return {...state, recipes: newRecipes}
    },
    del: (state, action: PayloadAction<number>) => {
        const newRecipes = state.recipes.slice()
        newRecipes.splice(action.payload, 1)
        return {...state, recipes: newRecipes}
    },
    update: (state, action: PayloadAction<UpdateRecipe>) => {
        const newRecipes = state.recipes.slice()
        newRecipes[action.payload.index] = action.payload.content
        return { ...state, recipes: newRecipes}
    },
  },
})

export const { add, update, del } = recipesSlice.actions

export const selectCount = (state: RootState) => state.recipes.recipes

export default recipesSlice.reducer