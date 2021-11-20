import { Flex, Box, Grid} from "@chakra-ui/layout"
import Recipe from "./components/Recipe"
import RecipeCard from "./components/RecipeCard"
import RecipeForm from "./components/RecipeForm"
import RegisterForm from "./components/RegisterForm"
import TopBar from "./components/TopBar"

const recipe = {
  id: 1,
  title: 'Pasta Carbonara',
  cookTime: 10,
  prepTime: 30,
  ingredients: 'ing1/ing2/ing3',
  steps: 'st1/st2/st3dasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss das sssssssssssssssssssssssssssssssssssssssssssssssssssssssss asssssssssssssssssssssssssssss adsdk ashdsjkdhs kjhdsssssssssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdss adsh djksdsdsdsdddddddddddddddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdd daskjhdskhjdsssssssssssssssssssssss dasjkhhhhhhhhhhhhhhhhhhh asdkjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh daskjhhhhhhhhhhhhhhhhhhhhh',
  category: 'Pasta',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg'
}

const App = () => {
  return (
    <>
    <TopBar/>
    <Flex justify="center" h="100%" w="100%" align="center" pt='20vh'>
      <Grid columnGap='10px' rowGap='10px' gridAutoFlow='row' templateColumns='repeat(auto-fill, minmax(auto, 300px))' templateRows='repeat(auto-fill,300px)'  h="100%" w='90%' pl='10%'>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe}/>
      </Grid>
    </Flex>
    </>
  )
}

export default App
