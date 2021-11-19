import { Flex } from "@chakra-ui/layout"
import RecipeCard from "./components/RecipeCard"

const recipe = {
  id: 1,
  title: 'Pasta Carbonara',
  cookTime: 10,
  prepTime: 30,
  ingredients: 'ing1/ing2/ing3',
  steps: 'st1/st2/st3dasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss das sssssssssssssssssssssssssssssssssssssssssssssssssssssssss asssssssssssssssssssssssssssss adsdk ashdsjkdhs kjhdsssssssssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdss adsh djksdsdsdsdddddddddddddddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdd daskjhdskhjdsssssssssssssssssssssss dasjkhhhhhhhhhhhhhhhhhhh asdkjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh daskjhhhhhhhhhhhhhhhhhhhhh',
  category: 'sweets'
}

const App = () => {
  return (
    <Flex justify="center" h="100%" w="100%" align="center">
      <RecipeCard {...recipe} />
    </Flex>
  )
}

export default App
